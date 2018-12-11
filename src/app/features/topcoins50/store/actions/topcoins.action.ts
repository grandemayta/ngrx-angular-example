import { Action } from '@ngrx/store';
import { Coin } from 'models/coin.model';

export const LOAD_TOP50 = '[Top50] Load Top50';
export const LOAD_TOP50_SUCCESS = '[Top50] Load Top50 Success';
export const LOAD_TOP50_FAIL = '[Top50] Load Top50 Fail';

export class LoadTop50 implements Action {
    readonly type = LOAD_TOP50;
}

export class LoadTop50Success implements Action {
    readonly type = LOAD_TOP50_SUCCESS;

    constructor(public payload: Coin[]) {}
}

export class LoadTop50Fail implements Action {
    readonly type = LOAD_TOP50_FAIL;

    constructor(public payload: any) {}
}

export type Top50Action = LoadTop50 | LoadTop50Success | LoadTop50Fail;
