import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from 'models/match.model';
import { Store } from '@ngrx/store';
import * as fromStore from './store';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  matches$: Observable<Match[]>;

  constructor(private store: Store<fromStore.MatchesState>) {
    this.store.dispatch(new fromStore.LoadMatches);
  }

  ngOnInit() {
    this.matches$ = this.store.select(fromStore.getAllMatches);
  }

}
