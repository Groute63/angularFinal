import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-top-menu></app-top-menu>
      <router-outlet></router-outlet>
    </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
}
