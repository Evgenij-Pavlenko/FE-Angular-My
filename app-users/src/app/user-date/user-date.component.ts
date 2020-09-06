import { Component, OnInit } from '@angular/core';
import {UserModel} from '../model/UserModel';

@Component({
  selector: 'app-user-date',
  templateUrl: './user-date.component.html',
  styleUrls: ['./user-date.component.scss']
})
export class UserDateComponent implements OnInit {
  users: UserModel[] = [
    {
      firstName: 'Name1',
      lastName: 'Fam1',
      age: 30,
      cityOfResidence: 'Berlin'
    },
    {
      firstName: 'Name2',
      lastName: 'Fam2',
      age: 40,
      cityOfResidence: 'Potsdam'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
