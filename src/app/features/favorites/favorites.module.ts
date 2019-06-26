import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites.component';

const ROUTES: Routes = [
  {
    path: '',
    component: FavoritesComponent
  }
];

@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class FavoritesModule { }
