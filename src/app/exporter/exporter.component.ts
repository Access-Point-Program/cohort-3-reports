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


  // TODO: Add Multiple sheets for rulesets and layouts respectively?
  // TODO: Get the name of the current user from Pro.to.type
  // api/rulesets-extended cyclones endpoint.


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


  private updateDate(ls: any[]) {
    return ls.reduce((el, acc) =>
      [...el, { ...acc, creation_date: new Date(acc.creation_date).toUTCString()}]
      , []);
  }

  private cellStyle(ws: XLSX.WorkSheet): XLSX.WorkSheet {

    // Metadata
    ws['!cols'] = [];

    for(let i = 0; i < 8; i++){
      // create column metadata object if it does not exist
      if(!ws["!cols"][i]) ws["!cols"][i] = {width: 14};
    }

    return ws;
  }

  private createTable(ws: XLSX.WorkSheet) : XLSX.WorkSheet{
    const ttl = this.constructR.reduce<number>((acc, el) => el.rules.length+acc, 0);
    const tb = XLSX.utils.decode_range(`F1:H${ttl}`);
   

    ws[XLSX.utils.encode_cell({c: tb.s.c, r: 0})] = { v: 'Ruleset'};
    ws[XLSX.utils.encode_cell({c: tb.s.c+1, r: 0})] = { v: 'Rule'};
    ws[XLSX.utils.encode_cell({c: tb.s.c+2, r: 0})] = { v: 'Conditions'};

    // loop through row -> col
    let lp = tb.s.r+1;
    for(const rule of this.constructR){
      const sumOfConditions = sum(rule.rules.map((el) => el.conditions.length));
      const b = tb.s.c;
        
      //Ruleset
      ws[XLSX.utils.encode_cell({c: b, r: lp})] = { v: rule.name };
      
      // Condition 
      let str = '';
      
      // WHEN Fact_type IS Value_type THEN Event_type
      // WHEN (__ IS __) AND (__IS__) THEN __
      
      // Fix bug TODO
      rule.rules.map((el, i:number) => {
        str+= `${i+1}. when `;
        el.conditions.map((condition) => {
          str+= `${condition.fact_type} is ${condition.value_type} and `
        })
        str+= `then ${el.event_type}.\n`;
      });

      ws[XLSX.utils.encode_cell({c: b+1, r: lp})] = { v: str }
      
      // Conditions count
      ws[XLSX.utils.encode_cell({c: b+2, r: lp})] = { v: sumOfConditions }
      lp++;
    }

    ws['!ref'] = `A1:H${Math.max(this.constructR.length+1, ttl+1)}`;

    return ws;

  }

  // Transformation should be done feroe this. EXPORT TO SHEETS 
  public export(): void {
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    
    const ws: XLSX.WorkSheet = this.cellStyle(XLSX.utils.json_to_sheet(this.constructD));
    
    XLSX.utils.book_append_sheet(wb, ws, 'Simulations');

    const v = this.constructR.reduce<any[]>((acc, {creation_date, name, id}) => { return [...acc, { id, name, creation_date}]}, []);

    let ws2: XLSX.WorkSheet = this.cellStyle(XLSX.utils.json_to_sheet(v));

    ws2 = this.createTable(ws2);

    XLSX.utils.book_append_sheet(wb, ws2, 'Rulesets');


    // save to file
    XLSX.writeFile(wb, `${this.user? `${this.user}-`: ''}Simulation-Results.xlsx`, {cellStyles: true});
  }

}




const RESULTS = [
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

const RULSETS = [
  {
    "id": 1,
    "name": "Ruleset 1",
    "creation_date": 1700924464070,
    "rules": [
      {
        id: 30,
        priority: 1.0,
        event_type: 'FORWARD',
        conditions: [
          {
            id: 40,
            fact_type: "FRONT",
            value_type: "EMPTY"
          }
        ]
      }
    ]
  },  {
    "id": 1,
    "name": "Ruleset 1",
    "creation_date": 1700924464070,
    "rules": [
      {
        id: 30,
        priority: 1.0,
        event_type: 'FORWARD',
        conditions: [
          {
            id: 40,
            fact_type: "FRONT",
            value_type: "EMPTY"
          },
          {
            id: 40,
            fact_type: "FRONT",
            value_type: "EMPTY"
          },
          {
            id: 40,
            fact_type: "FRONT",
            value_type: "EMPTY"
          }
        ]
      }
    ]
  },  {
    "id": 1,
    "name": "Ruleset 1",
    "creation_date": 1700924464070,
    "rules": [
      {
        id: 30,
        priority: 1.0,
        event_type: 'FORWARD',
        conditions: [
          {
            id: 40,
            fact_type: "FRONT",
            value_type: "EMPTY"
          },
          {
            id: 40,
            fact_type: "FRONT",
            value_type: "EMPTY"
          }
        ]
      }
    ]
  },  {
    "id": 1,
    "name": "Ruleset 1",
    "creation_date": 1700924464070,
    "rules": [
      {
        id: 30,
        priority: 1.0,
        event_type: 'FORWARD',
        conditions: [
        
        ]
      }
    ]
  },
  {
    "id": 2,
    "name": "Ruleset 2",
    "creation_date": 1700946420034,
    "rules": [{
      id: 30,
      priority: 1.0,
      event_type: 'FORWARD',
      conditions: [
        {
          id: 40,
          fact_type: "FRONT",
          value_type: "EMPTY"
        }
      ]
    },
    {
      id: 30,
      priority: 1.0,
      event_type: 'FORWARD',
      conditions: [
        {
          id: 40,
          fact_type: "FRONT",
          value_type: "EMPTY"
        }
      ]
    }
  ]
  },
  {
    "id": 3,
    "name": "Ruleset 3",
    "creation_date": 1700961257136,
    "rules": [{
      id: 30,
      priority: 1.0,
      event_type: 'FORWARD',
      conditions: [
        {
          id: 40,
          fact_type: "FRONT",
          value_type: "EMPTY"
        }
      ]
    }]
  },
]