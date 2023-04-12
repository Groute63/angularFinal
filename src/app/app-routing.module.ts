import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from "./group/group.component";
import { StudentComponent } from "./student/student.component";
import { StudentInfoComponent } from "./student-info/student-info.component";
import { GroupInfo } from './group-info/group-info.component';

const routes: Routes = [
  { path: 'group', component: GroupComponent },
  { path: 'student', component: StudentComponent },
  { path: "student/:id", component: StudentInfoComponent },
  { path: "group/:id", component: GroupInfo }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
