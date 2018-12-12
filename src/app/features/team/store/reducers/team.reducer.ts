import * as fromTeam from '../actions/team.action';
import { Team } from 'models/team.model';

export interface TeamState {
    data: Team;
    loaded: boolean;
    loading: boolean;
}

export const initialState: TeamState = {
    data: null,
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: fromTeam.TeamAction
    ): TeamState {

    switch (action.type) {
        case fromTeam.LOAD_TEAM: {
            return {
                ...state,
                loading: true
            };
        }
        case fromTeam.LOAD_TEAM_SUCCESS: {
            const data = action.payload;
            return {
                ...state,
                loading: false,
                loaded: true,
                data
            };
        }
        case fromTeam.LOAD_TEAM_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }

    return state;
}

export const getTeam = (state: TeamState) => state.data;
export const getTeamLoading = (state: TeamState) => state.loading;
export const getTeamLoaded = (state: TeamState) => state.loaded;
