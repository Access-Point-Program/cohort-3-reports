import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  styleUrls: ['./fin-chart.component.css']
})
export class FinChartComponent implements OnInit, OnChanges {

  @Input() Simulations: Results[] = [];

  private data: {o:number, h:number, c:number, l:number, x:number}[] = [];

  ngOnChanges(_changes: SimpleChanges): void {
    this.data = this.getData();
    this.update();
  }

  ngOnInit(): void {
    this.data = this.getData();
    this.update();
  }

  financialChartType: ChartType= 'candlestick';

  financialChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        label: 'CHRT - Chart.js Corporation',
        data: this.data, // Our data goes here
      },
    ],
  };

  financialChartOptions: ChartConfiguration['options']  = {
    responsive: true,
    animation: false,
    maintainAspectRatio: true,
    scales: {
      x: {
        
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
      }
    },
    borderColor: 'black',
    backgroundColor: 'rgba(255,0,0,0,0.3)',
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  constructor() {
    Chart.register(
      CandlestickController,
      CandlestickElement,
    );
  }

  private update() {

    this.financialChartData = {
      datasets: [
        {
          label: 'CHRT - Chart.js Corporation',
          data: this.data,
        }
      ]
  }
}

  // Convert data to usable format {x:Date, H: highest-point, c: seconeHighest, o: secondLowest, l: lowest }

  private getData(): {o:number, h:number, c:number, l:number, x:number}[]  {
    const output: {o:number, h:number, c:number, l:number, x:number}[] = [];

    const filteredList: Results[] = [];

    // all successful iterations, 
    // filter to only get successful iterations through this.

    this.Simulations.forEach((el) => {
      if(el.successful){
        filteredList.push(el);
      }
    });
  
    // Sort by Layouts, => x
    // Make multiple lists to iterate over and return them as [Key:value] format
    const sorted: {[key: string]: Results[]} = {};

    filteredList.forEach((el) => {
      if(!sorted[el.layout]){
        sorted[el.layout] = [];
      }

      sorted[el.layout].push(el);
    })
    console.log({sorted})


    for(const key in sorted){

      const obj: {o:number, h:number, c:number, l:number, x:number} = {o:0, h:0, c:0, l:0, x:0};

      // X is a problem. TODO
      // Go through the requirements again and see what is wrong. TODO
      

      // the maximum planned iterations, => H
      // We need to find the highest number of iterations planned. (iterations_max)
      obj.h = Math.max(...sorted[key].map((el) => el.iterations_max));

      // minimum planned iterations, => L
      // We need to find the lowest number of iterations planned. (iterations_max)
      obj.l = Math.min(...sorted[key].map((el) => el.iterations_max));
      
      // maximum completed iterations, => C 
      // We need to find the highest number of iterations planned. (iterations_used)
      obj.c = Math.max(...sorted[key].map((el) => el.iterations_used));
      
      // and minimum completed iterations. => O
      // We need to find the highestlowest number of iterations planned. (iterations_used)
      obj.o = Math.min(...sorted[key].map((el) => el.iterations_used));

      output.push(obj);
    }

    console.log({output})
    return output;
  }


}
