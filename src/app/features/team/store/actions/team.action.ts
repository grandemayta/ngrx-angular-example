import { Action } from '@ngrx/store';
import { Team } from 'models/team.model';

export const LOAD_TEAM = '[Team] Load Team';
export const LOAD_TEAM_SUCCESS = '[Team] Load Team Success';
export const LOAD_TEAM_FAIL = '[Team] Load Team Fail';

export class LoadTeam implements Action {
    readonly type = LOAD_TEAM;

    constructor(public id: number) {}
}

export class LoadTeamSuccess implements Action {
    readonly type = LOAD_TEAM_SUCCESS;

    constructor(public payload: Team) {}
}

export class LoadTeamFail implements Action {
    readonly type = LOAD_TEAM_FAIL;

    constructor(public payload: any) {}
}

export type TeamAction = LoadTeam | LoadTeamSuccess | LoadTeamFail;
