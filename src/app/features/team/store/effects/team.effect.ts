import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as teamActions from '../actions/team.action';
import { FootballService } from 'services/football/football.service';

@Injectable()
export class TeamEffects {
    constructor(
        private actions$: Actions,
        private footballService: FootballService
    ) {}

    @Effect()
    loadTeam$ = this.actions$.ofType(teamActions.LOAD_TEAM)
        .pipe(
            switchMap(action => {
                const id = action['id'];
                return this.footballService.getTeam(id).pipe(
                    map(data => new teamActions.LoadTeamSuccess(data)),
                    catchError(error => of(new teamActions.LoadTeamFail(error)))
                );
            })
        );
}
