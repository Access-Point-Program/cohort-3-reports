import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  public barChartData: ChartConfiguration['data'] = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
    ]
  };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: false,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  constructor() {
  }
}
