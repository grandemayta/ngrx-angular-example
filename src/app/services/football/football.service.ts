import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Team } from 'models/team.model';

@Injectable()
export class FootballService {
  apiUrl: string;
  apiVersion: string;
  apiHeaders: any;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://api.football-data.org';
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
      .get<Team>(`${this.apiUrl}/${this.apiVersion}/team/${id}`, { headers: this.apiHeaders })
      .pipe(
        catchError((error: any) => Observable.throw(error.json))
      );
  }
}
