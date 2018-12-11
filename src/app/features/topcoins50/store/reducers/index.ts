import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTopCoins50 from './topcoins50.reducers';

export interface TopCoins50State {
    coins: fromTopCoins50.TopCoin50State;
}

export const reducers: ActionReducerMap<TopCoins50State> = {
    coins: fromTopCoins50.reducer
};

export const getTopCoins50State = createFeatureSelector<TopCoins50State>('topcoins50');

export const getCoinsState = createSelector(getTopCoins50State, (state: TopCoins50State) => state.coins);

export const getAllTopCoins50 = createSelector(getCoinsState, fromTopCoins50.getTopCoins50);
export const getTopCoins50Loading = createSelector(getCoinsState, fromTopCoins50.getTopCoins50Loading);
export const getTopCoins50Loaded = createSelector(getCoinsState, fromTopCoins50.getTopCoins50Loaded);
