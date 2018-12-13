import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Standings } from 'models/standings.model';
import * as fromStore from './store';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {
  standings$: Observable<Standings[]>;

  constructor(private store: Store<fromStore.StandingsState>) {
    this.store.dispatch(new fromStore.LoadStandings);
  }

  ngOnInit() {
    this.standings$ = this.store.select(fromStore.getAllStandings);
  }

}
