import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIncludesComponent } from './project-includes.component';

describe('ProjectIncludesComponent', () => {
  let component: ProjectIncludesComponent;
  let fixture: ComponentFixture<ProjectIncludesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectIncludesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectIncludesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
