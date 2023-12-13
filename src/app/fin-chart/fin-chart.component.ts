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
  // Chart type
  public financialChartType: ChartType = 'candlestick';

  // Unfiltered data
  @Input() Simulations: Results[] = [];

  private dictionaryOfThings: Record<string, Results[]> = {};

  // Update on changes to Input()
  ngOnChanges(_changes: SimpleChanges): void {
    this.dictionaryOfThings = this.screams();
    this.update();
  }

  // onInit
  ngOnInit(): void {
    this.dictionaryOfThings = this.screams();
    this.update();
  }

  public financialChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: this.getData(), // Our data goes here
      },
    ],
  };

  // Chart Configuration
  public financialChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    animation: false,
    maintainAspectRatio: true,

    scales: {
      x: {
        ticks: {
          callback: (_value, index) => {
            const layoutnames = Object.keys(this.dictionaryOfThings).sort();
            return layoutnames[Number(index)];
          },
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
      tooltip: { enabled: false },
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Min. Max. Planned Vs Actual Iterations By Layout',
      },
    },
  };

  // Register a Candle stick chart
  constructor() {
    Chart.register(CandlestickController, CandlestickElement);
  }

  // update the variable and angular updates input to @Chart
  private update() {
    this.financialChartData = {
      datasets: [
        {
          data: this.getData(),
        },
      ],
    };
  }

  // filter to only get successful iterations through this.
  private screams(): Record<string, Results[]> {
    return this.Simulations.reduce<Record<string, Results[]>>(
      (sorted, result) => {
        if (!result.successful) return sorted;
        if (!sorted[result.layout]) sorted[result.layout] = [];

        sorted[result.layout].push(result);

        return sorted;
      },
      {}
    );
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

    const sorted = this.dictionaryOfThings;

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
      obj.x = layoutnames.indexOf(key) + 1;

      // the maximum planned iterations, => H
      // The highest number of iterations planned. (iterations_max)
      obj.h = Math.max(...sorted[key].map((el) => el.iterations_max));

      // minimum planned iterations, => L
      // The lowest number of iterations planned. 1
      obj.l = 1;

      // maximum completed iterations, => C
      // The highest number of iterations planned. (iterations_used)
      obj.c = Math.max(...sorted[key].map((el) => el.iterations_used));

      // and minimum completed iterations. => O
      // The highestlowest number of iterations planned. (iterations_used)
      obj.o = Math.min(...sorted[key].map((el) => el.iterations_used));

      output.push(obj);
    }

    return output;
  }
}
