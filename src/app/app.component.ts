import { Component } from '@angular/core';
import { ProductListComponent } from './products/product-list.component';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `<div class="row">
    <h1>Titulo</h1>
    <pm-products></pm-products>
  </div>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'angular-get-started';
}
