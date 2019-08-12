import { Injectable } from '@angular/core';
import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { LOAD_TEAMS, LoadTeamsSuccess, LoadTeamsFail } from './teams.action';
import { FootballService } from 'services/football/football.service';

@Injectable()
export class TeamsEffects {
    @Effect()
    loadTeams$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LOAD_TEAMS),
            switchMap(() => {
                return this.footballService.getTeams().pipe(
                    map(data => new LoadTeamsSuccess(data)),
                    catchError(error => of(new LoadTeamsFail(error)))
                );
            })
        )
    );

    constructor(
        private actions$: Actions,
        private footballService: FootballService
    ) {}
}
