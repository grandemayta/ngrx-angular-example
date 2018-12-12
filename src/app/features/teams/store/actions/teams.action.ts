import { Action } from '@ngrx/store';
import { Team } from 'models/team.model';

export const LOAD_TEAMS = '[Teams] Load Teams';
export const LOAD_TEAMS_SUCCESS = '[Teams] Load Teams Success';
export const LOAD_TEAMS_FAIL = '[Teams] Load Teams Fail';

export class LoadTeams implements Action {
    readonly type = LOAD_TEAMS;
}

export class LoadTeamsSuccess implements Action {
    readonly type = LOAD_TEAMS_SUCCESS;

    constructor(public payload: Team[]) {}
}

export class LoadTeamsFail implements Action {
    readonly type = LOAD_TEAMS_FAIL;

    constructor(public payload: any) {}
}

export type TeamsAction = LoadTeams | LoadTeamsSuccess | LoadTeamsFail;
