import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardGuardiansComponent } from './board-guardians.component';

describe('BoardGuardiansComponent', () => {
  let component: BoardGuardiansComponent;
  let fixture: ComponentFixture<BoardGuardiansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardGuardiansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardGuardiansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
