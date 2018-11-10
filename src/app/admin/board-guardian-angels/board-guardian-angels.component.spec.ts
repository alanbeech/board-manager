import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardGuardianAngelsComponent } from './board-guardian-angels.component';

describe('BoardGuardianAngelsComponent', () => {
  let component: BoardGuardianAngelsComponent;
  let fixture: ComponentFixture<BoardGuardianAngelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardGuardianAngelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardGuardianAngelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
