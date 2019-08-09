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
  matches$: Observable<Match[]>;

  constructor(private store: Store<MatchesState>) {
    this.store.dispatch(new LoadMatches);
  }

  ngOnInit() {
    this.matches$ = this.store.select(({ matches }) => matches.data);
  }
}
