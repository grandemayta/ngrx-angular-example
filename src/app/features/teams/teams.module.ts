import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TeamsComponent } from './teams.component';
import { TeamsEffects, reducer } from './state/index';

const ROUTES: Routes = [
  {
    path: '',
    component: TeamsComponent
  }
];

@NgModule({
  declarations: [TeamsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('teams', reducer),
    EffectsModule.forFeature([TeamsEffects])
  ]
})
export class TeamsModule { }
