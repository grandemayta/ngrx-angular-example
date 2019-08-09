import {
    MatchesAction,
    LOAD_MATCHES,
    LOAD_MATCHES_SUCCESS,
    LOAD_MATCHES_FAIL
} from './matches.action';
import { Match } from 'models/match.model';

interface ReducerState {
    data: Match[];
    loaded: boolean;
    loading: boolean;
}

const initialState: ReducerState = {
    data: [],
    loaded: false,
    loading: false
};

export function matchesReducer(state = initialState, action: MatchesAction): ReducerState {
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
    matches: ReducerState;
}
