import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Group, GroupThisStudents, Student} from "../model/group";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url = 'http://localhost:8080/api/students/v2';

  constructor(private http: HttpClient, private router: Router) {
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url)
  }

  getStudent(id: string): Observable<Student> {
    return this.http.get<Student>(this.url + '/' + id).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404 || error.status === 400) {
          this.router.navigate(['/error-page']);
        }
        return throwError(error);
      })
    );
  }

  addStudent(student: Student, id:string): Observable<Student> {
    return this.http.post<Student>(this.url + '?groupId=' + id, student).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404 || error.status === 400 || error.status === 500) {
          this.router.navigate(['/error-page']);
        }
        return throwError(error);
      })
    );
  }

  deleteStudent(id: number): Observable<Student> {
    return this.http.delete<Student>(this.url + '/'+id).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404 || error.status === 400 || error.status === 500) {
          this.router.navigate(['/error-page']);
        }
        return throwError(error);
      })
    );
  }

}
