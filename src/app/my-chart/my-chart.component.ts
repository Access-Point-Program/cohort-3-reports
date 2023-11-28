import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType,  } from 'chart.js';


@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent {
  public barChartData: ChartConfiguration['data'] = {
    labels: ['Day 1', 'Day 2 ', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      { data: [30, 59, 80, 81, 56, 55, 40], label: 'Fails', backgroundColor:'rgba(255,0,0,0.3)', borderColor:'rgb(255,0,0)',borderWidth:1 },
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Pass',  backgroundColor:'rgba(102,187,106,0.2)', borderColor:'rgb(102,187,106)',borderWidth:1  }
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
    scales:{
      x: {
        stacked: true,

      },
      y: {
        stacked: true
      }
    }
  };
  public barChartType: ChartType = 'bar';
  constructor() {
  }
}


  
  



