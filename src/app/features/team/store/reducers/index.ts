import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTeam from './team.reducer';

export interface TeamState {
    team: fromTeam.TeamState;
}

export const reducers: ActionReducerMap<TeamState> = {
    team: fromTeam.reducer
};

export const getTeamState = createFeatureSelector<TeamState>('team');

export const getTeamChildrenState = createSelector(getTeamState, (state: TeamState) => state.team);

export const getAllTeam = createSelector(getTeamChildrenState, fromTeam.getTeam);
export const getTeamLoading = createSelector(getTeamChildrenState, fromTeam.getTeamLoading);
export const getTeamLoaded = createSelector(getTeamChildrenState, fromTeam.getTeamLoaded);
