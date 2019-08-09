import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatchesComponent } from './matches.component';
import { MatchesEffects, reducer } from './state';

@NgModule({
  declarations: [MatchesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: MatchesComponent
    }]),
    StoreModule.forFeature('matches', reducer),
    EffectsModule.forFeature([MatchesEffects])
  ]
})
export class MatchesModule { }
