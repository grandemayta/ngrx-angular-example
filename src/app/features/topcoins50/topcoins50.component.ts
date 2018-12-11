import { Component, OnInit } from '@angular/core';
import { Coin } from 'models/coin.model';
import { Store } from '@ngrx/store';
import * as fromStore from './store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-topcoins50',
  templateUrl: './topcoins50.component.html',
  styleUrls: ['./topcoins50.component.scss']
})
export class TopCoins50Component implements OnInit {
  coins$: Observable<Coin[]>;

  constructor(private store: Store<fromStore.TopCoins50State>) { }

  ngOnInit() {
    this.coins$ = this.store.select(fromStore.getAllTopCoins50);
    this.store.dispatch(new fromStore.LoadTopCoins50);
  }

}
