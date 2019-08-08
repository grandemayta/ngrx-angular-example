import { Component, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Team } from 'models/team.model';
import { LoadTeams, TeamsState } from './state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  teams$: Observable<Team[]>;

  constructor(private store: Store<TeamsState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadTeams);
    this.teams$ = this.store.select(({ teams }) => teams.data);
  }
}
