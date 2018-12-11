import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from './store';
import { User } from 'models/users.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  userIpt = '';
  users$: Observable<User[]>;

  constructor(private store: Store<fromStore.UsersState>) { }

  ngOnInit() {
    this.users$ = this.store.select(fromStore.getAllUsers);
  }

  onSearch() {
    this.store.dispatch(new fromStore.LoadUsers(this.userIpt));
  }

  onKeyUp(event: KeyboardEvent) {
    this.userIpt = (<HTMLInputElement>event.target).value;
  }

}
