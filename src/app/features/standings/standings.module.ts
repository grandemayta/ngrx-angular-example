import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StandingsComponent } from './standings.component';

const ROUTES: Routes = [
  {
    path: 'standings',
    component: StandingsComponent
  }
];

@NgModule({
  declarations: [StandingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class StandingsModule { }
