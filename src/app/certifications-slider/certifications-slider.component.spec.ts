import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationsSliderComponent } from './certifications-slider.component';

describe('CertificationsSliderComponent', () => {
  let component: CertificationsSliderComponent;
  let fixture: ComponentFixture<CertificationsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificationsSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificationsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
