import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
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
    loadTeams$ = this.actions$
        .pipe(
            ofType(teamsActions.LOAD_TEAMS),
            switchMap(() => {
                return this.footballService.getTeams().pipe(
                    map(data => new teamsActions.LoadTeamsSuccess(data)),
                    catchError(error => of(new teamsActions.LoadTeamsFail(error)))
                );
            })
        );
}
