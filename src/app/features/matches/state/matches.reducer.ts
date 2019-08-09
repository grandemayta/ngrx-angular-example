import {
    MatchesAction,
    LOAD_MATCHES,
    LOAD_MATCHES_SUCCESS,
    LOAD_MATCHES_FAIL
} from './matches.action';
import { Match } from 'models/match.model';

export interface MatchState {
    data: Match[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: MatchState = {
    data: [],
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: MatchesAction
    ): MatchState {

    switch (action.type) {
        case LOAD_MATCHES: {
            return {
                ...state,
                loading: true
            };
        }
        case LOAD_MATCHES_SUCCESS: {
            const { payload } = action;
            return {
                ...state,
                loading: false,
                loaded: true,
                data: payload['matches']
            };
        }
        case LOAD_MATCHES_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }
    return state;
}

export interface MatchesState {
    matches: MatchState;
}
