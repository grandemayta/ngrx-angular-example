import * as fromTeams from '../actions/teams.action';
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
            const data = action.payload;
            return {
                ...state,
                loading: false,
                loaded: true,
                data: data['teams']
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

export const getTeams = (state: TeamState) => state.data;
export const getTeamsLoading = (state: TeamState) => state.loading;
export const getTeamsLoaded = (state: TeamState) => state.loaded;
