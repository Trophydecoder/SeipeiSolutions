import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicespageCarouselComponent } from './servicespage-carousel.component';

describe('ServicespageCarouselComponent', () => {
  let component: ServicespageCarouselComponent;
  let fixture: ComponentFixture<ServicespageCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicespageCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicespageCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
