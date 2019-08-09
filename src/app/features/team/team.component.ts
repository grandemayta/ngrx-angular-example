import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'models/team.model';
import { Store } from '@ngrx/store';
import { TeamState, LoadTeam } from './state/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teamId: number;
  team$: Observable<Team>;

  constructor(private router: ActivatedRoute, private store: Store<TeamState>) {
    this.teamId = this.router.snapshot.params.id;
    this.store.dispatch(new LoadTeam(this.teamId));
  }

  ngOnInit() {
    this.team$ = this.store.select(({ team }) => team.data);
  }
}
