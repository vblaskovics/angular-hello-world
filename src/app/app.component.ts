import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-hello-world';
  
  users: string[];
  constructor () {
    this.users = ['Joe', 'Peter', 'Carlos'];
  }
}
