import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardMapComponent } from './board-map.component';

describe('BoardMapComponent', () => {
  let component: BoardMapComponent;
  let fixture: ComponentFixture<BoardMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
