import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from "rxjs";
import { ActivatedRoute } from '@angular/router';
import {GroupService} from 'src/app/services/GroupService';

interface Student {
  id: number;
  name: string;
  birthdate: Date;
  number: string
}

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.css'],
})
export class GroupInfo {
  displayedColumns: string[] = ['name','birthdate'];
  id ?: string;
  students ?: Student[];
  isModalOpen = false;
  studentName ?: string;

  constructor(private route: ActivatedRoute, private groupService: GroupService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.id = id;
      this.groupService.getGroup(this.id).subscribe((group) => {
        this.students = group.students;
      });
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  createStudent() {
    this.closeModal();
  }
}
