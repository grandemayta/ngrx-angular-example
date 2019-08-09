import {
    TeamAction,
    LOAD_TEAM,
    LOAD_TEAM_FAIL,
    LOAD_TEAM_SUCCESS
 } from './team.action';
import { Team } from 'models/team.model';

export interface ReducerState {
    data: Team;
    loaded: boolean;
    loading: boolean;
}

export const initialState: ReducerState = {
    data: null,
    loaded: false,
    loading: false
};

export function teamReducer(state = initialState, action: TeamAction): ReducerState {
    switch (action.type) {
        case LOAD_TEAM: {
            return {
                ...state,
                loading: true
            };
        }
        case LOAD_TEAM_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.payload
            };
        }
        case LOAD_TEAM_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }

    return state;
}

export interface TeamState {
    team: ReducerState;
}
