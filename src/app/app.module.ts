import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { ServicesModule } from 'services/services.module';

const ROUTES: Routes = [
  {
    path: '',
    loadChildren: './features/home/home.module#HomeModule'
  },
  {
    path: 'teams',
    loadChildren: './features/teams/teams.module#TeamsModule'
  },
  {
    path: 'teams/:id',
    loadChildren: './features/team/team.module#TeamModule'
  },
  {
    path: 'standings',
    loadChildren: './features/standings/standings.module#StandingsModule'
  },
  {
    path: 'matches',
    loadChildren: './features/matches/matches.module#MatchesModule'
  },
  {
    path: 'favorites',
    loadChildren: './features/favorites/favorites.module#FavoritesModule'
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ServicesModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
