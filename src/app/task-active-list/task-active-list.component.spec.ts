import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskActiveListComponent } from './task-active-list.component';

describe('TaskActiveListComponent', () => {
  let component: TaskActiveListComponent;
  let fixture: ComponentFixture<TaskActiveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskActiveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskActiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
