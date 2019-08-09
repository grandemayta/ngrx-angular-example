import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as matchesActions from './matches.action';
import { FootballService } from 'services/football/football.service';

@Injectable()
export class MatchesEffects {
    constructor(
        private actions$: Actions,
        private footballService: FootballService
    ) {}

    @Effect()
    loadMatches$ = this.actions$
        .pipe(
            ofType(matchesActions.LOAD_MATCHES),
            switchMap(() => {
                return this.footballService.getMatches().pipe(
                    map(data => new matchesActions.LoadMatchesSuccess(data)),
                    catchError(error => of(new matchesActions.LoadMatchesFail(error)))
                );
            })
        );
}
