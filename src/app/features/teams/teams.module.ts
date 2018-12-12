import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams.component';

const ROUTES: Routes = [
  {
    path: 'teams',
    component: TeamsComponent
  }
];

@NgModule({
  declarations: [TeamsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class TeamsModule { }
