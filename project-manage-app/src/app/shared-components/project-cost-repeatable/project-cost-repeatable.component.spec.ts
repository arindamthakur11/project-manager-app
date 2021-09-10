import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCostRepeatableComponent } from './project-cost-repeatable.component';

describe('ProjectCostRepeatableComponent', () => {
  let component: ProjectCostRepeatableComponent;
  let fixture: ComponentFixture<ProjectCostRepeatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCostRepeatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCostRepeatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
