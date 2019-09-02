import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Team } from 'models/team.model';
import { Standings } from 'models/standings.model';
import { Match } from 'models/match.model';

@Injectable()
export class FootballService {
  apiUrl: string;
  apiVersion: string;
  apiHeaders: any;

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://api.football-data.org';
    this.apiVersion = 'v2';
    this.apiHeaders = new HttpHeaders({
      'X-Auth-Token': 'ffd61d87e73740c29dd389ea7619d5e1'
    });
  }

  @Effect()
  getTeams(): Observable<Team[]> {
    return this.http
      .get<Team[]>(`${this.apiUrl}/${this.apiVersion}/competitions/SA/teams`, { headers: this.apiHeaders })
      .pipe(
        catchError((error: any) => Observable.throw(error.json))
      );
  }

  @Effect()
  getTeam(id: number): Observable<Team> {
    return this.http
      .get<Team>(`${this.apiUrl}/${this.apiVersion}/teams/${id}`, { headers: this.apiHeaders })
      .pipe(
        catchError((error: any) => Observable.throw(error.json))
      );
  }

  @Effect()
  getStandings(): Observable<Standings[]> {
    return this.http
      .get<Standings[]>(`${this.apiUrl}/${this.apiVersion}/competitions/SA/standings?season=2019`, { headers: this.apiHeaders })
      .pipe(
        catchError((error: any) => Observable.throw(error.json))
      );
  }

  @Effect()
  getMatches(): Observable<Match[]> {
    return this.http
      .get<Match[]>(`${this.apiUrl}/${this.apiVersion}/competitions/SA/matches?season=2019`, { headers: this.apiHeaders })
      .pipe(
        catchError((error: any) => Observable.throw(error.json))
      );
  }
}
