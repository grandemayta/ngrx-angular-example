import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Standings } from 'models/standings.model';
import { StandingsState, LoadStandings } from './state';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {
  standings$: Observable<Standings[]>;

  constructor(private store: Store<StandingsState>) {
    this.store.dispatch(new LoadStandings);
  }

  ngOnInit() {
    this.standings$ = this.store.select(({ standings }) => standings.data);
  }
}
