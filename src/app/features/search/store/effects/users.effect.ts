import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as usersActions from '../actions/users.actions';
import { SearchService } from 'services/search.service';
import { User } from 'models/users.model';

@Injectable()
export class UsersEffects {
    constructor(
        private actions$: Actions,
        private userService: SearchService
    ) {}

    @Effect()
    loadUsers$ = this.actions$.ofType(usersActions.LOAD_USERS)
        .pipe(
            switchMap((action: usersActions.LoadUsers) => {
                const { id } = action;
                return this.userService.getUsers(id).pipe(
                    map(users => new usersActions.LoadUsersSuccess(users['items'])),
                    catchError(error => of(new usersActions.LoadUsersFail(error)))
                );
            })
        );
}
