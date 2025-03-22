import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectinMindComponent } from './projectin-mind.component';

describe('ProjectinMindComponent', () => {
  let component: ProjectinMindComponent;
  let fixture: ComponentFixture<ProjectinMindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectinMindComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectinMindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
