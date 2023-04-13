import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from "./components/group/group.component";
import { StudentComponent } from "./components/student/student.component";
import { StudentInfoComponent } from "./components/student-info/student-info.component";
import { GroupInfo } from './components/group-info/group-info.component';
import {ErrorPagengComponent} from "./components/error-pageng/error-pageng.component";

const routes: Routes = [
  { path: 'group', component: GroupComponent },
  { path: 'student', component: StudentComponent },
  { path: "student/:id", component: StudentInfoComponent },
  { path: "group/:id", component: GroupInfo },
  { path: 'error-page', component: ErrorPagengComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
