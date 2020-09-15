import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-uses-container',
  templateUrl: './uses-container.component.html',
  styleUrls: ['./uses-container.component.scss']
})
export class UsesContainerComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      users => this.users = users
    );
  }

}
