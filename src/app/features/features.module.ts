import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { TeamsModule } from './teams/teams.module';
import { StandingsModule } from './standings/standings.module';
import { TeamModule } from './team/team.module';
import { MatchesModule } from './matches/matches.module';
import { FavoritesModule } from './favorites/favorites.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    TeamsModule,
    StandingsModule,
    TeamModule,
    MatchesModule,
    FavoritesModule
  ]
})
export class FeaturesModule { }
