import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialChartComponent } from './financial-chart.component';

describe('FinancialChartComponent', () => {
  let component: FinancialChartComponent;
  let fixture: ComponentFixture<FinancialChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancialChartComponent]
    });
    fixture = TestBed.createComponent(FinancialChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
