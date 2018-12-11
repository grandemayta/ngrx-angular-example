import * as fromUsers from '../actions/users.actions';
import { User } from 'models/users.model';

export interface UserState {
    data: User[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: UserState = {
    data: [],
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: fromUsers.UsersAction
    ): UserState {

    switch (action.type) {
        case fromUsers.LOAD_USERS: {
            return {
                ...state,
                loading: true
            };
        }
        case fromUsers.LOAD_USERS_SUCCESS: {
            const data = action.payload;
            return {
                ...state,
                loading: false,
                loaded: true,
                data
            };
        }
        case fromUsers.LOAD_USERS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }

    return state;
}

export const getUsers = (state: UserState) => state.data;
export const getUsersLoading = (state: UserState) => state.loading;
export const getUsersLoaded = (state: UserState) => state.loaded;
