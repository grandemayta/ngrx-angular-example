import { Action } from '@ngrx/store';
import { User } from 'models/users.model';

export const LOAD_USERS = '[Users] Load Users';
export const LOAD_USERS_SUCCESS = '[Users] Load Users Success';
export const LOAD_USERS_FAIL = '[Users] Load Users Fail';

export class LoadUsers implements Action {
    readonly type = LOAD_USERS;

    constructor(public id: string) {}
}

export class LoadUsersSuccess implements Action {
    readonly type = LOAD_USERS_SUCCESS;

    constructor(public payload: User[]) {}
}

export class LoadUsersFail implements Action {
    readonly type = LOAD_USERS_FAIL;

    constructor(public payload: any) {}
}

export type UsersAction = LoadUsers | LoadUsersSuccess | LoadUsersFail;
