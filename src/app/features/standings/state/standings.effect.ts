import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { LOAD_STANDINGS, LoadStandingsFail, LoadStandingsSuccess } from './standings.action';
import { FootballService } from 'services/football/football.service';

@Injectable()
export class StandingsEffects {
    constructor(
        private actions$: Actions,
        private footballService: FootballService
    ) {}

    @Effect()
    loadStandings$ = this.actions$
        .pipe(
            ofType(LOAD_STANDINGS),
            switchMap(() => {
                return this.footballService.getStandings().pipe(
                    map(data => new LoadStandingsSuccess(data)),
                    catchError(error => of(new LoadStandingsFail(error)))
                );
            })
        );
}
