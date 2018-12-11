import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as topcoins50Actions from '../actions/topcoins50.action';
import { CoinsService } from 'services/coins/coins.service';

@Injectable()
export class TopCoins50Effects {
    constructor(
        private actions$: Actions,
        private coinsService: CoinsService
    ) {}

    @Effect()
    loadCoins$ = this.actions$.ofType(topcoins50Actions.LOAD_TOPCOINS50)
        .pipe(
            switchMap(() => {
                return this.coinsService.getTopCoins50().pipe(
                    map(data => new topcoins50Actions.LoadTopCoins50Success(data)),
                    catchError(error => of(new topcoins50Actions.LoadTopCoins50Fail(error)))
                );
            })
        );
}
