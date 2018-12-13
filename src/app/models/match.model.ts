import { Team } from './team.model';
import { Score } from './score.model';
import { Season } from './season.model';

export interface Match {
    id: number;
    season: Season;
    utcDate: Date;
    status: string;
    matchday: number;
    score: Score;
    homeTeam: Team;
    awayTeam: Team;
}
