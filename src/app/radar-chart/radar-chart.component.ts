import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { mean, median, mode } from 'mathjs';
import { Results } from '../Results';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit, OnChanges{

  @Input() Simulations: Results[] = [];

  ngOnChanges(_changes: SimpleChanges): void {
    this.getData()
  }


  ngOnInit(): void {
    this.getData()
  }


  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: false,
    maintainAspectRatio: true,
    plugins: { 
      title:{
        display: true,
        text: "Stats of Successful Layouts"
      }
    },
  };
  public pieChartData: ChartConfiguration["data"] = {
    labels: ["Mean", "Median", "Mode", "Range", "Success"],
    datasets: []
  };
  public pieChartType: ChartType = 'radar';

  private getData(){
    //Get all success
    const hat: Record<string, Results[]> = this.Simulations.reduce<Record<string, Results[]>>((sorted, result) => {
      if (!result.successful) return sorted;
      //Sort by layout
      if (!sorted[result.layout]) sorted[result.layout] = [];
      
      sorted[result.layout].push(result);
      
      return sorted;
    }, {});

    const output: {data:number[], label:string}[] = []

    
    for(const key in hat){
      const baggie: number[] = hat[key].reduce<number[]>((pen, pencil) => {
        return [...pen,pencil.iterations_used]
      },[])  

      output.push(
        {
          data:[
            mean(baggie), //Mean: Add all numbers per layout and divide by their length
            median(baggie), //Median: Find median of success by sorting the list and getting the middle value
            mode(baggie)|0, //Mode: Order array of success from least to greatest and get the number that appears the most
            (Math.max(...baggie) - Math.min(...baggie)), //Range: Find the difference between the highest and lowest value per layout
            baggie.length //Success: Get length of each list per layout
          ],
          label:key
        }
      );
    }
    this.pieChartData = {
      labels: ["Mean", "Median", "Mode", "Range", "Success"],
      datasets: output,
    };

  
  }

}
