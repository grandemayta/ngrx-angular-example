import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TeamComponent } from './team.component';
import { effects, reducers } from './store';

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
    StoreModule.forFeature('team', reducers),
    EffectsModule.forFeature(effects)
  ]
})
export class TeamModule { }
