import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as matchesActions from '../actions/matches.action';
import { FootballService } from 'services/football/football.service';

@Injectable()
export class MatchesEffects {
    constructor(
        private actions$: Actions,
        private footballService: FootballService
    ) {}

    @Effect()
    loadMatches$ = this.actions$.ofType(matchesActions.LOAD_MATCHES)
        .pipe(
            switchMap(() => {
                return this.footballService.getMatches().pipe(
                    map(data => new matchesActions.LoadMatchesSuccess(data)),
                    catchError(error => of(new matchesActions.LoadMatchesFail(error)))
                );
            })
        );
}
