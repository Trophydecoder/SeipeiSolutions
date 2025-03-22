import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutpagecarouselComponent } from './aboutpagecarousel.component';

describe('AboutpagecarouselComponent', () => {
  let component: AboutpagecarouselComponent;
  let fixture: ComponentFixture<AboutpagecarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutpagecarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutpagecarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
