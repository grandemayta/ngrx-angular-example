import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team.component';

const ROUTES: Routes = [
  {
    path: 'teams/:id',
    component: TeamComponent
  }
];

@NgModule({
  declarations: [TeamComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class TeamModule { }
