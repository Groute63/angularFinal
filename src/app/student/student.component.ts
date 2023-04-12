import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from "rxjs";

interface Student {
  id: number;
  name: string;
  birthdate: Date;
  number: string
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  displayedColumns: string[] = ['name','birthdate'];

  students: Student[] = [
  ];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getStudents().subscribe((students: Student[]) => {
      console.log(students);
      this.students = students;
    });
  }

  private getStudents(): Observable<Student[]> {
    const url = 'http://localhost:8080/api/students/v2';
    return this.http.get<Student[]>(url);
  }
}
