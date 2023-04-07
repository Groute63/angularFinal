import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from "rxjs";

interface Student {
  id: number;
  name: string;
  birthday: Date;
  number: string
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  displayedColumns: string[] = ['name'];

  students: Student[] = [
    /* {id : 1,name: 'Иван', birthday: new Date('01.01.2000'), group: 1},
     {id : 2,name: 'Абрам', birthday: new Date('02.02.2000'), group: 2},
     {id : 3,name: 'Михаил', birthday: new Date('03.03.2000'), group: 1},
     {id : 4,name: 'Иван', birthday: new Date('04.04.2000'), group: 2},
     {id : 5,name: 'Абрам', birthday: new Date('05.05.2000'), group: 1},
     {id : 6,name: 'Михаил', birthday: new Date('06.06.2000'), group: 2},
     {id : 7,name: 'Иван', birthday: new Date('07.07.2000'), group: 1},
     {id : 8,name: 'Абрам', birthday: new Date('08.08.2000'), group: 2},
     {id : 9,name: 'Михаил', birthday: new Date('09.09.2000'), group: 1}*/
  ];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getStudents().subscribe((students: Student[]) => {
      console.log("AAAAAAA")
      console.log(students)
      this.students = students;
    });
  }

  private getStudents(): Observable<Student[]> {
    const url = 'http://localhost:8080/api/students/v2/1';
    return this.http.get<Student[]>(url).pipe(
      map((data: any) => {
        return data.students;
      })
    );
  }
}
