import { Component } from '@angular/core';
import { Chart, ChartConfiguration, ChartType } from 'chart.js';
import {
  CandlestickController,
  CandlestickElement,
} from 'chartjs-chart-financial';
import 'chartjs-adapter-date-fns';
import { enUS } from 'date-fns/locale';

@Component({
  selector: 'app-financial-chart',
  templateUrl: './financial-chart.component.html',
  styleUrls: ['./financial-chart.component.css']
})
export class FinancialChartComponent {
  financialChartType: ChartType = 'candlestick';


  constructor() {
    Chart.register(
      CandlestickController,
      CandlestickElement
    );
  }

  public financialChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        label: 'Example Chart data',
        data: [
          {
            "x": 1669352400000,// X-axis -> date converted into timestamp
            "h": 90,// High -> Ending point for the stick (HIGHEST POINT)
            "c": 85,// Close -> Ending point of the Bar (END OF THE BAR, Lower than High)
            "o": 0,// Open -> Starting point for the Bar (STRT OF THE BAR, Lower than Close and High, Higher than Low)
            "l": 0,// Low -> Starting point for the stick (LOWEST POINT)
          },
          {
            "x": 1669438800000,
            "h": 95,
            "c": 65,// If (Close < Open), the bar turns red
            "o": 0,
            "l": 0,
          },
          {
            "x": 1669525200000,
            "h": 102,
            "c": 92,
            "o": 0,
            "l": 0,
          },
          {
            "x": 1669611600000,
            "h": 98,
            "c": 88,
            "o": 0,
            "l": 0,
          },
          {
            "x": 1669698000000,
            "h": 105,
            "c": 95,
            "o": 0,
            "l": 0,
          },
          {
            "x": 1669784400000,
            "h": 101,
            "c": 91,
            "o": 0,
            "l": 0,
          },
          {
            "x": 1669870800000,
            "h": 104,
            "c": 94,
            "o": 0,
            "l": 0,
          },
        ]
        // Data goes here type: { c: number; x: number; h: number; l: number; o: number }[] 
      },
    ],
  };

  public financialChartOptions: ChartConfiguration['options'] = { // Configuration
    responsive: true,
    animation: false,
    transitions: {
      show: {
        animations: {
          x: {
            from: 0
          },
          y: {
            from: 0
          }
        }
      },
      hide: {
        animations: {
          x: {
            to: 0
          },
          y: {
            to: 0
          }
        }
      }
    },
    maintainAspectRatio: true,
    scales: {
      x: {
        time: {
          unit: 'day',
        },
        adapters: {
          date: {
            locale: enUS,
          },
        },
        ticks: {
          source: 'auto',
        }
      },
      y: {
        ticks: {
          source: 'auto'
        }
      }
    },
    borderColor: 'black',
    backgroundColor: 'black',
    plugins: {
      legend: {
        display: true,
      },
    },
  };
}
