import { Injectable } from '@angular/core';
import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { LOAD_STANDINGS, LoadStandingsFail, LoadStandingsSuccess } from './standings.action';
import { FootballService } from 'services/football/football.service';

@Injectable()
export class StandingsEffects {
    @Effect()
    loadStandings$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LOAD_STANDINGS),
            switchMap(() => {
                return this.footballService.getStandings().pipe(
                    map(data => new LoadStandingsSuccess(data)),
                    catchError(error => of(new LoadStandingsFail(error)))
                );
            })
        )
    );

    constructor(
        private actions$: Actions,
        private footballService: FootballService
    ) {}
}
