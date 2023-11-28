import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { Results } from '../Results';
import { Layout } from '../layout';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, OnChanges{

  @Input() Simulations: Results[] = [];

  ngOnChanges(_changes: SimpleChanges): void {
    
  }


  ngOnInit(): void {
    
  }


  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: false,
    maintainAspectRatio: true,
    plugins: {
    },
  };
  public pieChartData: ChartConfiguration["data"] = {
    labels: ["median", "mean", "mode", "range", "success"],
    datasets: [
      { data: [65, 59, 80, 81, 56], label: 'Pass' },
    ]
  };
  public pieChartType: ChartType = 'radar';

  private getData(){
    const output = []
    //Get all success
    const hat: Record<string, Results[]> = this.Simulations.reduce<Record<string, Results[]>>((sorted, result) => {
      if (!result.successful) return sorted;
      //Sort by layout
      if (!sorted[result.layout]) sorted[result.layout] = [];
      
      sorted[result.layout].push(result);
      
      return sorted;
    }, {});

    //Success: Get length of each list per layout
    for(const key in hat){
        let success = hat[key].length;
        let median = hat[key].sort()

      for(const lock of hat[key]){
        //Median: Find median of success by sorting the list and getting the midle value
        



      }

    }


    


    //Mean: Add all numbers per layout and divide by their length

    //Mode: Order array of success from least to greatest and get the number that appears the most

    //Range: Find the difference between the highest and lowest value per layout
  }

}
