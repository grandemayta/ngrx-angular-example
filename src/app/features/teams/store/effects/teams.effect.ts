import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as teamsActions from '../actions/teams.action';
import { FootballService } from 'services/football/football.service';

@Injectable()
export class TeamsEffects {
    constructor(
        private actions$: Actions,
        private footballService: FootballService
    ) {}

    @Effect()
    loadTeams$ = this.actions$.ofType(teamsActions.LOAD_TEAMS)
        .pipe(
            switchMap(() => {
                return this.footballService.getTeams().pipe(
                    map(data => new teamsActions.LoadTeamsSuccess(data)),
                    catchError(error => of(new teamsActions.LoadTeamsFail(error)))
                );
            })
        );
}