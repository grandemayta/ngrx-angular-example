import { Injectable } from '@angular/core';
import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { LOAD_TEAM, LoadTeamFail, LoadTeamSuccess } from './team.action';
import { FootballService } from 'services/football/football.service';

@Injectable()
export class TeamEffects {
    @Effect()
    loadTeam$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LOAD_TEAM),
            switchMap(action => {
                const id = action['id'];
                return this.footballService.getTeam(id).pipe(
                    map(data => new LoadTeamSuccess(data)),
                    catchError(error => of(new LoadTeamFail(error)))
                );
            })
        )
    );

    constructor(
        private actions$: Actions,
        private footballService: FootballService
    ) {}
}
