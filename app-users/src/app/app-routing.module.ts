import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserShowComponent} from './user-show/user-show.component';
import {UserDateComponent} from './user-date/user-date.component';

const routes: Routes = [
  {
    path: '',
    component: UserDateComponent
  },
  {
    path: 'user/:first-name',
    component: UserShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
