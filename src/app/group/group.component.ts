import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Group {
  name: string;
}

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent {
  groups: Group[] = [
    { name: 'Группа 1' },
    { name: 'Группа 2' },
    { name: 'Группа 3' }
  ];

 /* constructor(private http: HttpClient) {}*/

  onGroupClick(group: Group) {
    /*this.http.get('http://localhost:8080/api/group/v2/1').subscribe(
      (data) => {
        console.log(`Получена информация для группы ${group.name}:`, data);
      },
      (error) => {
        console.error(`Ошибка при получении информации для группы ${group.name}:`, error);
      }
    );
    console.log(`Нажата группа: ${group.name}`); */
  }
}
