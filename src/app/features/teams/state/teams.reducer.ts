import * as fromTeams from './teams.action';
import { Team } from 'models/team.model';

export interface TeamState {
    data: Team[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: TeamState = {
    data: [],
    loaded: false,
    loading: false
};

export interface TeamsState {
    teams: TeamState;
}

export function reducer(
    state = initialState,
    action: fromTeams.TeamsAction
    ): TeamState {

    switch (action.type) {
        case fromTeams.LOAD_TEAMS: {
            return {
                ...state,
                loading: true
            };
        }
        case fromTeams.LOAD_TEAMS_SUCCESS: {
            const { payload } = action;
            return {
                ...state,
                loading: false,
                loaded: true,
                data: payload['teams']
            };
        }
        case fromTeams.LOAD_TEAMS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }

    return state;
}
