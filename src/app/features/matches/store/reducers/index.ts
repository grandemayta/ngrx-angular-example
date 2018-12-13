import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMatches from './matches.reducer';

export interface MatchesState {
    matches: fromMatches.MatchState;
}

export const reducers: ActionReducerMap<MatchesState> = {
    matches: fromMatches.reducer
};

export const getMatchesState = createFeatureSelector<MatchesState>('matches');

export const getMatchesChildrenState = createSelector(getMatchesState, (state: MatchesState) => state.matches);

export const getAllMatches = createSelector(getMatchesChildrenState, fromMatches.getMatches);
export const getMatchesLoading = createSelector(getMatchesChildrenState, fromMatches.getMatchesLoading);
export const getMatchesLoaded = createSelector(getMatchesChildrenState, fromMatches.getMatchesLoaded);
