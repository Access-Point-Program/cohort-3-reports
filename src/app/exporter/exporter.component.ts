import { Component, Input } from '@angular/core';
import * as XLSX from 'xlsx';
import { Results } from '../Results';

@Component({
  selector: 'app-exporter',
  templateUrl: './exporter.component.html',
  styleUrls: ['./exporter.component.css']
})
export class ExporterComponent {

  @Input() data: Results[] = [];

  private d: Results[] = [
    {
      
      layout: '3',
      ruleset: '4',
      iterations_used: 5,
      iterations_max: 13,
      successful: true,
      creation_date: 1701275133606
    },
    {
      
      layout: '8',
      ruleset: '3',
      iterations_used: 5,
      iterations_max: 15,
      successful: true,
      creation_date: 1701058828980
    },
    {
      
      layout: '3',
      ruleset: '5',
      iterations_used: 4,
      iterations_max: 18,
      successful: false,
      creation_date: 1701058888980
    },
  ];

  private construct: any[] = this.d.reduce<any[]>((el, acc) => {
    return [...el, {...acc, creation_date: new Date(acc.creation_date)}];
  }, []);



  // TODO: Add Multiple sheets for rulesets and layouts respectively?

  public export(): void {
    const ws: XLSX.WorkSheet=XLSX.utils.json_to_sheet(this.construct);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    console.log(ws);
    
    // save to file
     XLSX.writeFile(wb, 'Simulation-Results.xlsx');
  }
}
