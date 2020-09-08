import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-first-name-filter',
  templateUrl: './first-name-filter.component.html',
  styleUrls: ['./first-name-filter.component.scss']
})
export class FirstNameFilterComponent implements OnInit {
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
  firstNameFilter: string;
  user: User;

  constructor(route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  filter(firstName: string): User[] {
    const filteredUsers: User[] = [];
    this.users.forEach(user => {
      if (user.firstName === firstName) {
        filteredUsers.push(user);
      }
    });
    return filteredUsers;
  }

}
