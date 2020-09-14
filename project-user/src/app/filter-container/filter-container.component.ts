import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {ActivatedRoute} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.scss']
})
export class FilterContainerComponent implements OnInit {

  filterObject: User = {
    firstName: null,
    lastName: null,
    age: null,
    city: null
  };

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
      Object.keys(params).forEach((key) =>
        this.filterObject[key] = params[key]
      );
    });
  }

  filter(users: User[], filterUser: User): User[] {
    const filteredUsers: User[] = [];
    this.users.forEach(user => {
      Object.keys(filterUser).forEach(key => {
        if (filterUser[key] !== null) {
          if (user[key] === filterUser[key]) {
            filteredUsers.push(user);
          }
        }
      });
    });
    return filteredUsers;
  }


}
