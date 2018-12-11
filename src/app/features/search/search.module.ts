import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SearchComponent } from './search.component';
import { reducers, effects } from './store';

const ROUTES: Routes = [
  {
    path: '',
    component: SearchComponent
  }
];

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('users', reducers),
    EffectsModule.forFeature(effects)
  ]
})
export class SearchModule { }
