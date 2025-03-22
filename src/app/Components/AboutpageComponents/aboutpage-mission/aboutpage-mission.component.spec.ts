import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutpageMissionComponent } from './aboutpage-mission.component';

describe('AboutpageMissionComponent', () => {
  let component: AboutpageMissionComponent;
  let fixture: ComponentFixture<AboutpageMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutpageMissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutpageMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
