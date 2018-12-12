import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'models/team.model';
import { Store } from '@ngrx/store';
import * as fromStore from './store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teamId: number;
  team$: Observable<Team>;

  constructor(private router: ActivatedRoute, private store: Store<fromStore.TeamState>) {
    this.teamId = this.router.snapshot.params.id;
  }

  ngOnInit() {
    this.team$ = this.store.select(fromStore.getAllTeam);
    this.store.dispatch(new fromStore.LoadTeam(this.teamId));
  }

}
