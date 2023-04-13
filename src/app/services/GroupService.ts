import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Group,GroupThisStudents} from "../model/group";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private url = 'http://localhost:8080/api/groups/v2';

  constructor(private http: HttpClient, private router: Router) {
  }

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.url + '/getAll')
  }

  getGroup(id:string): Observable<GroupThisStudents> {
    const url = 'http://localhost:8080/api/groups/v2/' + id;
    return this.http.get<GroupThisStudents>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404 || error.status === 400) {
          this.router.navigate(['/error-page']);
        }
        return throwError(error);
      })
    );
  }

  addGroup(group : Group):Observable<Group>{
    const url = 'http://localhost:8080/api/groups/v2';
    return this.http.post<Group>(url,group).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404 || error.status === 400 || error.status === 500) {
          this.router.navigate(['/error-page']);
        }
        return throwError(error);
      })
    );
  }

  deleteGroup(id : number): Observable<Group>{
    const url = 'http://localhost:8080/api/groups/v2/' + id;
    return this.http.delete<Group>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404 || error.status === 400 || error.status === 500) {
          this.router.navigate(['/error-page']);
        }
        return throwError(error);
      })
    );
  }

}
