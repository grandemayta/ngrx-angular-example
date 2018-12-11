import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from 'models/users.model';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  getUsers(id: string): Observable<User[]> {
    return this.http
      .get<User[]>(`https://api.github.com/search/users?q=${id}`)
      .pipe(
        catchError((error: any) => Observable.throw(error.json()))
      );
  }
}