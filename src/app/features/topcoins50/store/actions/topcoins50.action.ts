import { Action } from '@ngrx/store';
import { Coin } from 'models/coin.model';

export const LOAD_TOPCOINS50 = '[TopCoins50] Load TopCoins50';
export const LOAD_TOPCOINS50_SUCCESS = '[TopCoins50] Load TopCoins50 Success';
export const LOAD_TOPCOINS50_FAIL = '[TopCoins50] Load TopCoins50 Fail';

export class LoadTopCoins50 implements Action {
    readonly type = LOAD_TOPCOINS50;
}

export class LoadTopCoins50Success implements Action {
    readonly type = LOAD_TOPCOINS50_SUCCESS;

    constructor(public payload: Coin[]) {}
}

export class LoadTopCoins50Fail implements Action {
    readonly type = LOAD_TOPCOINS50_FAIL;

    constructor(public payload: any) {}
}

export type TopCoins50Action = LoadTopCoins50 | LoadTopCoins50Success | LoadTopCoins50Fail;
