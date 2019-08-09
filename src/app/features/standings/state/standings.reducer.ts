import {
    StandingsAction,
    LOAD_STANDINGS,
    LOAD_STANDINGS_FAIL,
    LOAD_STANDINGS_SUCCESS
} from './standings.action';
import { Standings } from 'models/standings.model';

interface ReducerState {
    data: Standings[];
    loaded: boolean;
    loading: boolean;
}

const initialState: ReducerState = {
    data: [],
    loaded: false,
    loading: false
};

export function standingsReducer(state = initialState, action: StandingsAction): ReducerState {
    switch (action.type) {
        case LOAD_STANDINGS: {
            return {
                ...state,
                loading: true
            };
        }
        case LOAD_STANDINGS_SUCCESS: {
            const { payload } = action;
            return {
                ...state,
                loading: false,
                loaded: true,
                data: payload['standings']
            };
        }
        case LOAD_STANDINGS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }

    return state;
}

export interface StandingsState {
    standings: ReducerState;
}
