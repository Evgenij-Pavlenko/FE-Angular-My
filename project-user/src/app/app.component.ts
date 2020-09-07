import { Component } from '@angular/core';
import {User} from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-user';
  user: User = {
    firstName: 'Vasja',
    lastName: 'Vasiljev',
    age: 30,
    city: 'Berlin'
  };
}
