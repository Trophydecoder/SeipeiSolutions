import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutpageWhyChooseUSComponent } from './aboutpage-why-choose-us.component';

describe('AboutpageWhyChooseUSComponent', () => {
  let component: AboutpageWhyChooseUSComponent;
  let fixture: ComponentFixture<AboutpageWhyChooseUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutpageWhyChooseUSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutpageWhyChooseUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
