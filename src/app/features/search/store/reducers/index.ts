import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsers from './users.reducer';

export interface UsersState {
    users: fromUsers.UserState;
}

export const reducers: ActionReducerMap<UsersState> = {
    users: fromUsers.reducer
};

export const getProductsState = createFeatureSelector<UsersState>('users');

export const getUsersState = createSelector(getProductsState, (state: UsersState) => state.users);

export const getAllUsers = createSelector(getUsersState, fromUsers.getUsers);
export const getUsersLoading = createSelector(getUsersState, fromUsers.getUsersLoading);
export const getUsersLoaded = createSelector(getUsersState, fromUsers.getUsersLoaded);
