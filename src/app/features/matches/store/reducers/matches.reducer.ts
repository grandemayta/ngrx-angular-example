import * as fromMatches from '../actions/matches.action';
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
    action: fromMatches.MatchesAction
    ): MatchState {

    switch (action.type) {
        case fromMatches.LOAD_MATCHES: {
            return {
                ...state,
                loading: true
            };
        }
        case fromMatches.LOAD_MATCHES_SUCCESS: {
            const data = action.payload;
            return {
                ...state,
                loading: false,
                loaded: true,
                data: data['matches']
            };
        }
        case fromMatches.LOAD_MATCHES_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }

    return state;
}

export const getMatches = (state: MatchState) => state.data;
export const getMatchesLoading = (state: MatchState) => state.loading;
export const getMatchesLoaded = (state: MatchState) => state.loaded;
