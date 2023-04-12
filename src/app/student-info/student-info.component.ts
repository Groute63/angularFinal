import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Observable } from 'rxjs';

interface Student {
  id: number;
  name: string;
  birthdate: Date;
  number: string
}

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent {
  id ?: string;
  students ?: Student;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.id = id;
    }
    this.getStudent().subscribe(students => {
      console.log(students)
      this.students = students;
    });
  }

  private getStudent(): Observable<Student> {
    const url = `http://localhost:8080/api/students/v2/${this.id}`;
    return this.http.get<Student>(url)
  }
}
