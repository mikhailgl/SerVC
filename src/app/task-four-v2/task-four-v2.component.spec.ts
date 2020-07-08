import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFourV2Component } from './task-four-v2.component';

describe('TaskFourV2Component', () => {
  let component: TaskFourV2Component;
  let fixture: ComponentFixture<TaskFourV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskFourV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFourV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
