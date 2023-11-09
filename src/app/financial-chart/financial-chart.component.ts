import { Component } from '@angular/core';
import { Chart, ChartConfiguration, ChartType } from 'chart.js';
import {
  CandlestickController,
  CandlestickElement,
} from 'chartjs-chart-financial';

@Component({
  selector: 'app-financial-chart',
  templateUrl: './financial-chart.component.html',
  styleUrls: ['./financial-chart.component.css']
})
export class FinancialChartComponent {
  barCount = 60;
  initialDateStr = '2017-04-01T00:00:00';

  public financialChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        label: 'Example Chart data',
        data: [
          {
            "c": 1,
            "x": 100,
            "h": 110,
            "l": 90,
            "o": 105
          },
          {
            "c": 2,
            "x": 200,
            "h": 210,
            "l": 190,
            "o": 205
          },
          {
            "c": 3,
            "x": 300,
            "h": 310,
            "l": 290,
            "o": 305
          }
        ]
         // Data goes here
      },
    ],
  };

  public financialChartOptions: ChartConfiguration['options'] = { // Configuration
    responsive: true,
    animation: false,
    maintainAspectRatio: true,
    
    borderColor: 'black',
    backgroundColor: 'black',
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  public financialChartType: ChartType = 'line';


  constructor() {
    Chart.register(
      CandlestickController,
      CandlestickElement
    );
  }

  randomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  randomBar(
    date: Date,
    lastClose: number
  ): { c: number; x: number; h: number; l: number; o: number } {
    const open = this.randomNumber(lastClose * 0.95, lastClose * 1.05);
    const close = this.randomNumber(open * 0.95, open * 1.05);
    const high = this.randomNumber(
      Math.max(open, close),
      Math.max(open, close) * 1.1
    );
    const low = this.randomNumber(
      Math.min(open, close) * 0.9,
      Math.min(open, close)
    );
    return {
      x: +date,
      o: open,
      h: high,
      l: low,
      c: close,
    };
  }

  // { c: number; x: number; h: number; l: number; o: number }[] 
    
  
}
