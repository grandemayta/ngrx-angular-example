import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStandings from './standings.reducer';

export interface StandingsState {
    teams: fromStandings.StandingState;
}

export const reducers: ActionReducerMap<StandingsState> = {
    teams: fromStandings.reducer
};

export const getStandingsState = createFeatureSelector<StandingsState>('standings');

export const getStandingsChildrenState = createSelector(getStandingsState, (state: StandingsState) => state.teams);

export const getAllStandings = createSelector(getStandingsChildrenState, fromStandings.getStandings);
export const getStandingsLoading = createSelector(getStandingsChildrenState, fromStandings.getStandingsLoading);
export const getStandingsLoaded = createSelector(getStandingsChildrenState, fromStandings.getStandingsLoaded);
