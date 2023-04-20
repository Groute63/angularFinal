import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable, Subscription} from "rxjs";
import {Group, Student} from "../../model/group";
import {GroupService} from "../../services/GroupService";
import {StudentService} from "../../services/StudentServices";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  displayedColumns: string[] = ['name', 'birthdate'];
  groups !: Group[];
  groupsSubscription ?: Subscription;
  students: Student[] = [];
  studentsSubscription ?: Subscription;
  isModalOpen = false;
  student: Student = {name: '', birthdate: undefined, number: '', groupId: ''};

  constructor(private studentService: StudentService, private groupService: GroupService) {
  }

  ngOnInit(): void {
    this.groupsSubscription = this.groupService.getGroups()
      .subscribe((groups: Group[]) => {
        this.groups = groups;
        console.log(this.groups)
        for (let i = 0; i < groups.length; i++) {
            for (let j = 0; j < groups[i].students.length; j++) {
              let student: Student = groups[i].students[j]
              student.groupId = String(groups[i].id);
              this.students.push(groups[i].students[j])
            }
        }
        this.students = [...this.students]
      });
  }

  ngOnDestroy() {
    if (this.groupsSubscription) {
      this.groupsSubscription.unsubscribe();
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.student.name = ''
    this.student.number = ''
    this.student.birthdate = undefined
    this.student.groupId = '';
    this.student.id = undefined;
    this.isModalOpen = false;
  }

  updateStudent(student: Student) {
      this.student.name = student.name;
      this.student.id = student.id;
      this.student.number = student.number;
      this.student.birthdate = student.birthdate?.split('T')[0]
      this.student.groupId = student.groupId
      this.openModal()
  }

  createStudent() {
    if (this.student.name && this.student.groupId && this.student.number && this.student.birthdate) {
      this.studentService.addStudent(this.student, this.student.groupId).subscribe((newStudent: Student) => {
        if (this.student.id) {
          for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].id == newStudent.id) {
              this.students[i] = newStudent
              this.students[i].groupId = this.student.groupId
              console.log(newStudent)
            }
          }
        } else {
          newStudent.groupId = this.student.groupId;
          this.students.push(newStudent);
        }
        this.students = [...this.students]
        this.closeModal();
      })
    }
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.students = this.students.filter((student: Student) => student.id !== id);
    });
  }
}
