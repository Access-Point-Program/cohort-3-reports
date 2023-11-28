import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Chart, ChartConfiguration, ChartType } from 'chart.js';
import {
  CandlestickController,
  CandlestickElement,
} from 'chartjs-chart-financial';

import 'chartjs-adapter-date-fns';
import { enUS } from 'date-fns/locale';
import { Results } from '../Results';

@Component({
  selector: 'app-fin-chart',
  templateUrl: './fin-chart.component.html',
  styleUrls: ['./fin-chart.component.css'],
})
export class FinChartComponent implements OnInit, OnChanges {
  public financialChartType: ChartType = 'candlestick';

  // Unfiltered data
  @Input() Simulations: Results[] = [];

  // Filtered data ready to use
  private data: { o: number; h: number; c: number; l: number; x: number }[] =
    [];

  private dictionaryOfThings: Record<string, Results[]> = {};
  // Update on changes to Input()
  ngOnChanges(_changes: SimpleChanges): void {
    this.dictionaryOfThings = this.screams();
    this.data = this.getData();
    this.update();
  }

  // onInit
  ngOnInit(): void {
    this.dictionaryOfThings = this.screams();
    this.data = this.getData();
    this.update();
  }

  public financialChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: this.data, // Our data goes here
      },
    ],
  };

  public financialChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    animation: false,
    maintainAspectRatio: true,

    scales: {
      x: {
        ticks: {
          callback: (value, index, ticks) => {
            const layoutnames = Object.keys(this.dictionaryOfThings).sort();
            return layoutnames[Number(index)];
          }
        },
        adapters: {
          date: {
            locale: enUS,
          },
        },
      },
      y: {
        ticks: {
          source: 'auto',
        },
      },
    },
    
    borderColor: 'black',
    backgroundColor: 'rgba(255,0,0,0,0.3)',
    plugins: {
      tooltip: {enabled: false},
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Min. Max. Planned Vs Actual Iterations By Layout'
      }
    },
  };

  constructor() {
    Chart.register(CandlestickController, CandlestickElement);
  }

  private update() {
    this.financialChartData = {
      datasets: [
        {
          data: this.data,
        },
      ],
    };
  }

  private screams(): Record<string, Results[]> {
    
    
    return this.Simulations.reduce<Record<string, Results[]>>((sorted, result) => {
      if (!result.successful) return sorted;
      if (!sorted[result.layout]) sorted[result.layout] = [];
      
      sorted[result.layout].push(result);
      
      return sorted;
    }, {});
  }

  // Convert data to usable format {x:Date, H: highest-point, c: seconeHighest, o: secondLowest, l: lowest }

  private getData(): {
    o: number;
    h: number;
    c: number;
    l: number;
    x: number;
  }[] {
    const output: { o: number; h: number; c: number; l: number; x: number }[] =
      [];

    const filteredList: Results[] = [];

    // all successful iterations,
    // filter to only get successful iterations through this.

    const sorted = this.dictionaryOfThings;
    console.log({ sorted });

    const layoutnames = Object.keys(sorted).sort();
    for (const key in sorted) {
      const obj: { o: number; h: number; c: number; l: number; x: number } = {
        o: 0,
        h: 0,
        c: 0,
        l: 0,
        x: 0,
      };

      // Go through the requirements again and see what is wrong. TODO
      obj.x= layoutnames.indexOf(key)+1;

      // the maximum planned iterations, => H
      // We need to find the highest number of iterations planned. (iterations_max)
      obj.h = Math.max(...sorted[key].map((el) => el.iterations_max));

      // minimum planned iterations, => L
      // We need to find the lowest number of iterations planned. (iterations_max)
      obj.l = 1;

      // maximum completed iterations, => C
      // We need to find the highest number of iterations planned. (iterations_used)
      obj.c = Math.max(...sorted[key].map((el) => el.iterations_used));

      // and minimum completed iterations. => O
      // We need to find the highestlowest number of iterations planned. (iterations_used)
      obj.o = Math.min(...sorted[key].map((el) => el.iterations_used));

      output.push(obj);
    }

    console.log({ output });
    return output;
  }
}
