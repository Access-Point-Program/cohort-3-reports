import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as XLSX from 'xlsx';
import { Results } from '../Results';
import { sum } from 'mathjs';
import { AppService } from '../app.service';
import { Ruleset } from '../Ruleset';

@Component({
  selector: 'app-exporter',
  templateUrl: './exporter.component.html',
  styleUrls: ['./exporter.component.css']
})
export class ExporterComponent implements OnInit, OnChanges {

  @Input() Simulations: Results[] = [];
  @Input() Rulesets: Ruleset[] = [];

  // API calls before this
  private user: string = '';
  private constructD: Results[] = [];  
  private constructR: Ruleset[] = [];


  ngOnInit(): void {
    this.constructD = this.updateDate(this.Simulations);
    this.constructR = this.updateDate(this.Rulesets);
  }

  ngOnChanges(_changes: SimpleChanges): void {
    this.constructD = this.updateDate(this.Simulations);

    //Change Rulesets so it can only have unique rulesets
    const g = this.Simulations.reduce<any[]>((acc, obj) => {
      if (!acc.find((el) => el.name === obj.ruleset)) {
        return [...acc, this.Rulesets.find((el) => el.name === obj.ruleset)]
      }
      return acc;
    }, []);

    this.constructR = this.updateDate(g);
  }

  // Add an actual date for excel to recognize
  private updateDate(ls: any[]) {
    return ls.reduce((el, acc) =>
      [...el, { ...acc, creation_date: new Date(acc.creation_date).toUTCString()}]
      , []);
  }

  // Add per cell metadata for styles
  private cellStyle(ws: XLSX.WorkSheet): XLSX.WorkSheet {

    // Metadata
    ws['!cols'] = [];

    for(let i = 0; i < 8; i++){
      // create column metadata object if it does not exist
      if(!ws["!cols"][i]) ws["!cols"][i] = {width: 14};
    }

    return ws;
  }

  // For Rulesets, create a seperate table in the same sheet
  private createTable(ws: XLSX.WorkSheet) : XLSX.WorkSheet{

    // total length of how many rules exist
    const ttl = this.constructR.reduce<number>((acc, el) => el.rules.length+acc, 0);

    // get the range to use from the length
    const tb = XLSX.utils.decode_range(`F1:H${ttl}`);
   

    // Titles
    ws[XLSX.utils.encode_cell({c: tb.s.c, r: 0})] = { v: 'Ruleset'};
    ws[XLSX.utils.encode_cell({c: tb.s.c+1, r: 0})] = { v: 'Rule(s)'};
    ws[XLSX.utils.encode_cell({c: tb.s.c+2, r: 0})] = { v: 'Conditions'};

    // For loop to go through all rulesets
    let lp = tb.s.r+1;
    for(const rule of this.constructR){
      // get totalt length or all rules in one ruleset
      const sumOfConditions = sum(rule.rules.map((el) => el.conditions.length));

      // Starting point of the table in the worksheet
      const b = tb.s.c;
        

      // Start Rendering

      //Ruleset
      ws[XLSX.utils.encode_cell({c: b, r: lp})] = { v: rule.name };
      
      // WHEN Fact_type IS Value_type THEN Event_type
      let str = '';
      
      rule.rules.map((el, i:number) => {
        str+= `${i+1}. when `;
        el.conditions.map((condition) => {
          str+= `${condition.fact_type} is ${condition.value_type} and `
        })
        str+= `then ${el.event_type}.\n`;
      });
      
      // Condition as a string
      ws[XLSX.utils.encode_cell({c: b+1, r: lp})] = { v: str }
      
      // Conditions count
      ws[XLSX.utils.encode_cell({c: b+2, r: lp})] = { v: sumOfConditions }
      lp++;
    }

    // update the ref so i can actually get rendered to the sheet
    ws['!ref'] = `A1:H${Math.max(this.constructR.length+1, ttl+1)}`;

    return ws;
  }

  // Transformation should be done feroe this. EXPORT TO SHEETS 
  public export(): void {

    // New book
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    
    // Simulations Sheet with correct Metadata
    const ws: XLSX.WorkSheet = this.cellStyle(XLSX.utils.json_to_sheet(this.constructD));
    
    // Append to our workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Simulations');

    // Strip unwanted data
    const v = this.constructR.reduce<any[]>((acc, {creation_date, name, id}) => { return [...acc, { id, name, creation_date}]}, []);

    // Rulesets Sheet with correct Metadata
    let ws2: XLSX.WorkSheet = this.cellStyle(XLSX.utils.json_to_sheet(v));

    // add table to our worksheet
    ws2 = this.createTable(ws2);

    // Append to the workbook
    XLSX.utils.book_append_sheet(wb, ws2, 'Rulesets');


    // save to file
    XLSX.writeFile(wb, `${this.user? `${this.user}-`: ''}Simulation-Results.xlsx`, {cellStyles: true});
  }
}
