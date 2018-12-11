import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TopCoins50Component } from './topcoins50.component';

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
    RouterModule.forChild(ROUTES)
  ]
})
export class Topcoins50Module { }
