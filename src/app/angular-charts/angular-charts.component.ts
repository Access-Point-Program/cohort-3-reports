import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-angular-charts',
  templateUrl: './angular-charts.component.html',
  styleUrls: ['./angular-charts.component.css'],
})
export class AngularChartsComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  labels: string[] = [
    '2023-01-01',
    '2023-01-02',
    '2023-01-03',
    '2023-01-04',
    '2023-01-05',
    '2023-01-06',
    '2023-01-07',
    '2023-01-08',
    '2023-01-09',
    '2023-01-10',
    '2023-01-11',
  ];

  public data: ChartConfiguration<'line'>['data'] = {
    labels: this.labels,
    datasets: [
      {
        label: 'Chart',
        data: [100, 120, 122, 145, 200, 160, 140, 180, 220, 190],
        fill: false,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1,
        tension: 0.1,
      },
    ],
  };
}
