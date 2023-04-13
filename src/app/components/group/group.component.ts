import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Group} from 'src/app/model/group'
import {GroupService} from 'src/app/services/GroupService';


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit, OnDestroy {
  groups !: Group[];
  displayedColumns: string[] = ['name'];
  groupsSubscription ?: Subscription;
  isModalOpen = false;
  groupName ?: string;

  constructor(private groupService: GroupService) {
  }

  ngOnInit(): void {
    this.groupsSubscription = this.groupService.getGroups()
      .subscribe((groups: Group[]) => {
        this.groups = groups;
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
    this.isModalOpen = false;
  }

  createGroup() {
    // Здесь можно добавить логику для создания группы
    this.closeModal();
  }

}
