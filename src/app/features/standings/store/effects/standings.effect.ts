import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as standingsActions from '../actions/standings.action';
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
            ofType(standingsActions.LOAD_STANDINGS),
            switchMap(() => {
                return this.footballService.getStandings().pipe(
                    map(data => new standingsActions.LoadStandingsSuccess(data)),
                    catchError(error => of(new standingsActions.LoadStandingsFail(error)))
                );
            })
        );
}
