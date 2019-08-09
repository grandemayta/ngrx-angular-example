import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TeamsComponent } from './teams.component';
import { teamsReducer, TeamsEffects } from './state/index';

@NgModule({
  declarations: [TeamsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: TeamsComponent
    }]),
    StoreModule.forFeature('teams', teamsReducer),
    EffectsModule.forFeature([TeamsEffects])
  ]
})
export class TeamsModule { }
