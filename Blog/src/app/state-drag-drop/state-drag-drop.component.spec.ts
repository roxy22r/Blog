import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDragDropComponent } from './state-drag-drop.component';

describe('StateDragDropComponent', () => {
  let component: StateDragDropComponent;
  let fixture: ComponentFixture<StateDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateDragDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
