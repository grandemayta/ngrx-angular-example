import * as fromStandings from '../actions/standings.action';
import { Standings } from 'models/standings.model';

export interface StandingState {
    data: Standings[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: StandingState = {
    data: [],
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: fromStandings.StandingsAction
    ): StandingState {

    switch (action.type) {
        case fromStandings.LOAD_STANDINGS: {
            return {
                ...state,
                loading: true
            };
        }
        case fromStandings.LOAD_STANDINGS_SUCCESS: {
            const data = action.payload;
            return {
                ...state,
                loading: false,
                loaded: true,
                data: data['standings']
            };
        }
        case fromStandings.LOAD_STANDINGS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }

    return state;
}

export const getStandings = (state: StandingState) => state.data;
export const getStandingsLoading = (state: StandingState) => state.loading;
export const getStandingsLoaded = (state: StandingState) => state.loaded;
