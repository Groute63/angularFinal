import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from "rxjs";
import { ActivatedRoute } from '@angular/router';

interface Student {
  id: number;
  name: string;
  birthdate: Date;
  number: string
}

interface Group {
    students : Student[]
  }

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.css'],
})
export class GroupInfo {
  displayedColumns: string[] = ['name','birthdate'];
  id ?: string;
  students: Student[] = [];     

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.id = id;
    }
    this.getGroup().subscribe((group) => {
      console.log(group)
      this.students = group.students;
    });
  }

  private getGroup(): Observable<Group> {
    const url = 'http://localhost:8080/api/groups/v2/' + this.id;
    return this.http.get<Group>(url)
  }
}
