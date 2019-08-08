import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { ServicesModule } from 'services/services.module';
import { environment } from '../environments/environment';

const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./features/teams/teams.module').then(m => m.TeamsModule)
  },
  {
    path: 'teams/:id',
    loadChildren: () => import('./features/team/team.module').then(m => m.TeamModule)
  },
  {
    path: 'standings',
    loadChildren: () => import('./features/standings/standings.module').then(m => m.StandingsModule)
  },
  {
    path: 'matches',
    loadChildren: () => import('./features/matches/matches.module').then(m => m.MatchesModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./features/favorites/favorites.module').then(m => m.FavoritesModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    }),
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
