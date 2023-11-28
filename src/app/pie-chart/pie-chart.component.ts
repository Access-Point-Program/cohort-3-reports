import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: false,
    maintainAspectRatio: true,
    plugins: {
    },
  };
  public pieChartData: ChartConfiguration["data"] = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Pass' },
    ]
  };
  public pieChartType: ChartType = 'pie';

}
