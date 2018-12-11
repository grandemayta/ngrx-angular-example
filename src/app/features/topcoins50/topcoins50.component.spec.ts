import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCoins50Component } from './topcoins50.component';

describe('Top50Component', () => {
  let component: TopCoins50Component;
  let fixture: ComponentFixture<TopCoins50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCoins50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCoins50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
