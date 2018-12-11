import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { Topcoins50Module } from './topcoins50/topcoins50.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    Topcoins50Module
  ]
})
export class FeaturesModule { }
