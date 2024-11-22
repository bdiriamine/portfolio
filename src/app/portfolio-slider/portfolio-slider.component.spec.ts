import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSliderComponent } from './portfolio-slider.component';

describe('PortfolioSliderComponent', () => {
  let component: PortfolioSliderComponent;
  let fixture: ComponentFixture<PortfolioSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
