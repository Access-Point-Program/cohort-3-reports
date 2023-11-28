import { Component, Input } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { Results } from '../Results';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {


  @Input() Simulations: Results[] = [];

// Mock Data
  public barChartData: ChartConfiguration['data'] = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],

    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Pass' },
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Fails' }
    ]
  };

  public ChartOptions: ChartConfiguration['options'] = {
    responsive: false,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales:{
      x: {
        stacked: true,

      },
      y: {
        stacked: true
      }
    }
  };

  constructor() {
  }
 }