import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StandingsComponent } from './standings.component';
import { standingsReducer, StandingsEffects } from './state';

@NgModule({
  declarations: [StandingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: StandingsComponent
    }]),
    StoreModule.forFeature('standings', standingsReducer),
    EffectsModule.forFeature([StandingsEffects])
  ]
})
export class StandingsModule { }
