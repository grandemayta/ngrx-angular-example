import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTeams from './teams.reducer';

export interface TeamsState {
    teams: fromTeams.TeamState;
}

export const reducers: ActionReducerMap<TeamsState> = {
    teams: fromTeams.reducer
};

export const getTeamsState = createFeatureSelector<TeamsState>('teams');

export const getTeamsChildrenState = createSelector(getTeamsState, (state: TeamsState) => state.teams);

export const getAllTeams = createSelector(getTeamsChildrenState, fromTeams.getTeams);
export const getTeamsLoading = createSelector(getTeamsChildrenState, fromTeams.getTeamsLoading);
export const getTeamsLoaded = createSelector(getTeamsChildrenState, fromTeams.getTeamsLoaded);
