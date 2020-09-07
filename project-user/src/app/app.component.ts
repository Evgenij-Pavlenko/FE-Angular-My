import {Component} from '@angular/core';
import {User} from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-user';

  firstNameFilter = 'Johnn';
  users: User[] = [
    {
      firstName: 'Vasja',
      lastName: 'Vasiljev',
      age: 20,
      city: 'Berlin'
    },
    {
      firstName: 'John',
      lastName: 'Connor',
      age: 35,
      city: 'Los Angeles'
    }
  ];

  filter(firstName: string): User[]{
    const filteredUsers: User[] = [];
    this.users.forEach(user => {
      if (user.firstName === firstName){
        filteredUsers.push(user);
      }
    });
    return filteredUsers;
  }
}
