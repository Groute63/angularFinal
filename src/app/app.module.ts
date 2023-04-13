import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {GroupComponent} from './components/group/group.component';
import {RouterLink, RouterModule, RouterOutlet, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TopMenuComponent} from './components/top-menu/top-menu.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from '@angular/flex-layout';
import {StudentComponent} from './components/student/student.component';
import {AppRoutingModule} from './app-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatLineModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {StudentInfoComponent} from './components/student-info/student-info.component';
import {HttpClientModule} from "@angular/common/http";
import {GroupInfo} from "./components/group-info/group-info.component"
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {FormsModule} from "@angular/forms";
import { ErrorPagengComponent } from './components/error-pageng/error-pageng.component';


@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    TopMenuComponent,
    StudentComponent,
    StudentInfoComponent,
    GroupInfo,
    ErrorPagengComponent,
  ],
  imports: [
    HttpClientModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserModule,
    RouterOutlet,
    RouterLink,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatLineModule,
    MatIconModule,
    MatTableModule,
    [MatProgressSpinnerModule],
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
