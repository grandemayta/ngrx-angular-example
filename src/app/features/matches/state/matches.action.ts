import { Action } from '@ngrx/store';
import { Match } from 'models/match.model';

export const LOAD_MATCHES = '[Matches] Load Matches';
export const LOAD_MATCHES_SUCCESS = '[Matches] Load Matches Success';
export const LOAD_MATCHES_FAIL = '[Matches] Load Matches Fail';

export class LoadMatches implements Action {
    readonly type = LOAD_MATCHES;
}

export class LoadMatchesSuccess implements Action {
    readonly type = LOAD_MATCHES_SUCCESS;

    constructor(public payload: Match[]) {}
}

export class LoadMatchesFail implements Action {
    readonly type = LOAD_MATCHES_FAIL;

    constructor(public payload: any) {}
}

export type MatchesAction = LoadMatches | LoadMatchesSuccess | LoadMatchesFail;
