import {
    TeamsAction,
    LOAD_TEAMS,
    LOAD_TEAMS_FAIL,
    LOAD_TEAMS_SUCCESS
} from './teams.action';
import { Team } from 'models/team.model';

interface ReducerState {
    data: Team[];
    loaded: boolean;
    loading: boolean;
}

const initialState: ReducerState = {
    data: [],
    loaded: false,
    loading: false
};

export function teamsReducer(state = initialState, action: TeamsAction): ReducerState {
    switch (action.type) {
        case LOAD_TEAMS: {
            return {
                ...state,
                loading: true
            };
        }
        case LOAD_TEAMS_SUCCESS: {
            const { payload } = action;
            return {
                ...state,
                loading: false,
                loaded: true,
                data: payload['teams']
            };
        }
        case LOAD_TEAMS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }

    return state;
}

export interface TeamsState {
    teams: ReducerState;
}
