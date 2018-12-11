import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Coin } from 'models/coin.model';

@Injectable()
export class CoinsService {

  constructor(private http: HttpClient) { }

  @Effect()
  getTopCoins50(): Observable<Coin[]> {
    return this.http
      .get<Coin[]>('https://chasing-coins.com/api/v1/top-coins/50')
      .pipe(
        catchError((error: any) => Observable.throw(error.json))
      );
  }
}
