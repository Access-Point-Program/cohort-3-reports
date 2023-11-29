import { Component, Input, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType,  } from 'chart.js';
import { Results } from '../Results';


@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent {
  
  @Input() data: Results[] = [];
  
  
  // updated Data
  private days: { [key: string]: Results[] } = {};
  private labels: string[] = [];
  
  public barChartType: ChartType = 'bar';
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: this.labels,
    datasets: []
  };

  // Update everytime data changes
  ngOnChanges(_changes: SimpleChanges): void {
    this.days = this.sort();
    this.labels = Array.from(Object.keys(this.days));
    this.update();
  }

  // Update on Init
  ngOnInit(): void {
    this.days = this.sort();
    this.labels = Array.from(Object.keys(this.days));
    this.update();
  }

  constructor() { }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: false,
    maintainAspectRatio: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: 'Success Failure Rates'
      }
    },
  };

  // update chart data dynmically
  private update(): void {

    // change data here
    const pass: number[] = [];
    const fail: number[] = [];

    for (const key in this.days) {
      let p = 0;
      let f = 0;

      this.days[key].forEach((el) => {
        if (el.successful) { p++; } else { f++; }
      })

      pass.push(p);
      fail.push(f);
    }

    // Apply
    this.barChartData = {
      labels: this.labels, // each day
      datasets: [
        {
          label: 'Fail',
          backgroundColor: 'rgba(255, 0, 0, 0.3)',
          borderWidth: 1,
          borderColor: 'rgb(255, 0,0)',
          data: fail, // [each, day, need, same, size]
        },
        {
          label: 'Success',
          backgroundColor: 'rgba(102, 187, 106, 0.2)',
          borderWidth: 1,
          borderColor: 'rgb(102, 187, 106)',
          data: pass, // [each, day, need, same, size]
        },
      ]
    }
  };

  // Converts into a key:value pair grouped by days(Today + past 6 days = 1 week). 
  private sort(): { [key: string]: Results[] } {

    //Get today's date
    const today = new Date();

    // Output
    let output: { [key: string]: Results[] } = {};

    // Run a loop to assign the keys for last 7 days depending on what today is, and including today
    for (let i = 0; i < 7; i++) {
      output[new Date(today.getFullYear(), today.getMonth(), today.getDate() - i).toDateString()] = [];
    }

    // assign each Results to their respective day
    for (const Results of this.data) {
      const ResultsDate = new Date(Results.creation_date).toDateString();

      // check if the simulaiton was ran in last 7 days, if so, assign to their respective key
      if (output[ResultsDate]) {
        output[ResultsDate].push(Results);
      }
    }

    //return output
    return output;
  };
}


  
  



