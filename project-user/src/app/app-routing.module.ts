import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstNameFilterComponent} from './first-name-filter/first-name-filter.component';

const routes: Routes = [
  {
    path: 'users/first-name/:firstName',
    component: FirstNameFilterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
