import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Group {
  id : number;
  name: string;
}

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent {
  groups: Group[] = [];
  displayedColumns: string[] = ['name'];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getGroups().subscribe((groups: Group[]) => {
      console.log(groups)
      this.groups = groups;
    });
  }

  private getGroups(): Observable<Group[]> {
    const url = 'http://localhost:8080/api/groups/v2/getAll';
    return this.http.get<Group[]>(url)
  }
}
