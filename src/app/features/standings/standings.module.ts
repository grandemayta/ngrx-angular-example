import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StandingsComponent } from './standings.component';
import { effects, reducers } from './store';

const ROUTES: Routes = [
  {
    path: '',
    component: StandingsComponent
  }
];

@NgModule({
  declarations: [StandingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('standings', reducers),
    EffectsModule.forFeature(effects)
  ]
})
export class StandingsModule { }
