import {Component, Input, OnInit} from '@angular/core';
import {User} from '../model/user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-first-name-filter',
  templateUrl: './first-name-filter.component.html',
  styleUrls: ['./first-name-filter.component.scss']
})
export class FirstNameFilterComponent implements OnInit {

  @Input()
  user: User;

  firstName: string;

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

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log('Params: ' + params.firstName);
      this.firstName = params.firstName;
    });
  }

  filter(firstName: string): User[] {
    console.log('First name: ' + firstName);
    const filteredUsers: User[] = [];
    this.users.forEach(user => {
      if (user.firstName === firstName) {
        filteredUsers.push(user);
      }
    });
    return filteredUsers;
  }

/*  Params: undefined
  first-name-filter.component.ts:45 First name: undefined
  first-name-filter.component.ts:45 First name: undefined
  first-name-filter.component.ts:45 First name: undefined
  core.js:26833 Angular is running in development mode. Call enableProdMode() to enable production mode.
  first-name-filter.component.ts:39 Params: Vasja
  first-name-filter.component.ts:45 First name: Vasja
  first-name-filter.component.ts:45 First name: undefined
  first-name-filter.component.ts:45 First name: undefined
  first-name-filter.component.ts:45 First name: undefined
  first-name-filter.component.ts:45 First name: undefined
  client:52 [WDS] Live Reloading enabled.
  */

}
