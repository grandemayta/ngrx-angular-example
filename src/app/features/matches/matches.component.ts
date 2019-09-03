import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from 'models/match.model';
import { Store } from '@ngrx/store';
import { MatchesState, LoadMatches } from './state';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  matches$: Observable<any>;

  constructor(private store: Store<MatchesState>) {
    this.store.dispatch(new LoadMatches);
  }

  ngOnInit() {
    this.matches$ = this.store.select(({ matches }) => {
      return this.convertArrayToObject(matches.data, 'matchday');
    });
  }

  // TODO: Move to utils
  convertArrayToObject(values: any[], key: string) {
    return values.reduce((acc, value) => {
      (acc[value[key]] = acc[value[key]] || []).push(value);
      return acc;
    }, {});
  }

  // TODO: Move to utils
  descOrder = (a: any, b: any) => {
    if (a.key < b.key) {
      return b.key;
    }
  }
}
