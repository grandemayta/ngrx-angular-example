import { Component, OnInit } from '@angular/core';
import { Team } from 'models/team.model';
import { Store } from '@ngrx/store';
import * as fromStore from './store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  teams$: Observable<Team[]>;

  constructor(private store: Store<fromStore.TeamsState>) { }

  ngOnInit() {
    this.teams$ = this.store.select(fromStore.getAllTeams);
    this.store.dispatch(new fromStore.LoadTeams);
  }

}
