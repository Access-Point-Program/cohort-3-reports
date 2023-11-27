import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinChartComponent } from './fin-chart.component';

describe('FinChartComponent', () => {
  let component: FinChartComponent;
  let fixture: ComponentFixture<FinChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinChartComponent]
    });
    fixture = TestBed.createComponent(FinChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
