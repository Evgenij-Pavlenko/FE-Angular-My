import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.scss']
})
export class UserShowComponent implements OnInit {
  @Input()
  firstName: string;

  @Input()
  lastName: string;

  @Input()
  age: number;

  @Input()
  cityOfResidence: string;

  @Input()
  path: string;

  constructor() { }

  ngOnInit(): void {
    this.path = 'user/' + this.firstName;

  }

}
