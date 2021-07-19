import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: ` <nav class="navbar navbar-expand navbar-light bg-light">
    <a class="navbar-brand">{{ pageTitle }}</a>
    <ul class="nav navbar-nav">
      <li><a class="nav-link" routerLink="/welcome">Home</a></li>
      <li>
        <a class="nav-link" routerLink="/products">Products List</a>
      </li>
    </ul>
  </nav>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageTitle: string = '';
}
