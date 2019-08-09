import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TeamComponent } from './team.component';
import { teamReducer, TeamEffects } from './state';

@NgModule({
  declarations: [TeamComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: TeamComponent
    }]),
    StoreModule.forFeature('team', teamReducer),
    EffectsModule.forFeature([TeamEffects])
  ]
})
export class TeamModule { }
