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
  group: Group = {students: [], name: ''};

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

  updateGroup(group: Group) {
    this.group.name = group.name;
    this.group.id = group.id;
    console.log(this.group)
    this.openModal()
  }

  createGroup() {
    if (this.group.name) {
      this.groupService.addGroup(this.group).subscribe((newGroup: Group) => {
        if (this.group.id) {
          for (let i = 0; i < this.groups.length; i++) {
            if (this.groups[i].id == newGroup.id) {
              this.groups[i] = newGroup
            }
          }
        } else {
          this.groups.push(newGroup);
        }
        this.groups = [...this.groups]
        this.closeModal();
        this.group.name = ''
        this.group.id = undefined;
      })
    }
  }

  deleteGroup(id: number) {
    this.groupService.deleteGroup(id).subscribe(() => {
      this.groups = this.groups.filter((group: Group) => group.id !== id);
    });
  }

}
