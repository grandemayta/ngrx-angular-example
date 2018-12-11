import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TopCoins50Component } from './topcoins50.component';
import { effects, reducers } from './store';

const ROUTES: Routes = [
  {
    path: 'topcoins50',
    component: TopCoins50Component
  }
];

@NgModule({
  declarations: [TopCoins50Component],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('topcoins50', reducers),
    EffectsModule.forFeature(effects)
  ]
})
export class Topcoins50Module { }
