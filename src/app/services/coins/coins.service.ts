import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Coin } from 'models/coin.model';

@Injectable()
export class CoinsService {
  httpHeaders: any;

  constructor(private http: HttpClient) {
    this.httpHeaders = new HttpHeaders({
      'X-Auth-Token': 'ffd61d87e73740c29dd389ea7619d5e1'
    });
  }

  @Effect()
  getTopCoins50(): Observable<Coin[]> {
    return this.http
      .get<Coin[]>('http://api.football-data.org/v2/competitions/SA/teams', { headers: this.httpHeaders })
      .pipe(
        catchError((error: any) => Observable.throw(error.json))
      );
  }
}
