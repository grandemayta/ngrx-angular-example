import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatchesComponent } from './matches.component';
import { matchesReducer, MatchesEffects } from './state';

@NgModule({
  declarations: [MatchesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: MatchesComponent
    }]),
    StoreModule.forFeature('matches', matchesReducer),
    EffectsModule.forFeature([MatchesEffects])
  ]
})
export class MatchesModule { }
