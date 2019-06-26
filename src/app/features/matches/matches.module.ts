import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatchesComponent } from './matches.component';
import { effects, reducers } from './store';

const ROUTES: Routes = [
  {
    path: '',
    component: MatchesComponent
  }
];

@NgModule({
  declarations: [MatchesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('matches', reducers),
    EffectsModule.forFeature(effects)
  ]
})
export class MatchesModule { }
