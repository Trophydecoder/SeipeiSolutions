import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutpageClientsComponent } from './aboutpage-clients.component';

describe('AboutpageClientsComponent', () => {
  let component: AboutpageClientsComponent;
  let fixture: ComponentFixture<AboutpageClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutpageClientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutpageClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
