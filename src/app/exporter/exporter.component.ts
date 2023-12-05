import { Component, Input, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { Results } from '../Results';
import { sum } from 'mathjs';

@Component({
  selector: 'app-exporter',
  templateUrl: './exporter.component.html',
  styleUrls: ['./exporter.component.css']
})
export class ExporterComponent implements OnInit {

  @Input() data: Results[] = [];

  // MOCKS
  private d: Results[] = RESULTS;
  private r: any[] = RULSETS;

  // TODO: Add service to constructor, make function to get data using service, and use ngoninit after done.
  // TODO: Add Multiple sheets for rulesets and layouts respectively?
  // TODO: Get the name of the current user from Pro.to.type
  // api/rulesets-extended cyclones endpoint.
  
  



  // API calls before this
  private user: string = '';
  private constructD: any[] = [];  
  private constructR: any[] = [];


  ngOnInit(): void {
    this.constructD = this.updateDate(this.d);
    this.constructR = this.updateDate(this.r);
  }


  private updateDate(ls: any[]): any[] {
    return ls.reduce<any>((el, acc) =>
      [...el, { ...acc, creation_date: new Date(acc.creation_date)}]
      , []);
  }

  private cellStyle(ws: XLSX.WorkSheet) {

    const cn = [XLSX.utils.decode_col("A"), XLSX.utils.decode_col("B"), XLSX.utils.decode_col("C"),  XLSX.utils.decode_col("D"),  XLSX.utils.decode_col("E"),  XLSX.utils.decode_col("F"), XLSX.utils.decode_col("G"), XLSX.utils.decode_col("H")];

    // Metadata
    ws['!cols'] = [];

    for(let i = 0; i < 8; i++){
      // create column metadata object if it does not exist
      if(!ws["!cols"][i]) ws["!cols"][i] = {width: 14};
    }

    const c = XLSX.utils.decode_row("1");
    

    return ws;
  }

  private createTable(ws: XLSX.WorkSheet) : XLSX.WorkSheet{
    const ttl = this.constructR.reduce((acc, el) => el.rules.length+acc, 0);
    const tb = XLSX.utils.decode_range(`F1:H${ttl}`);
   

    ws[XLSX.utils.encode_cell({c: tb.s.c, r: 0})] = { v: 'Ruleset'};
    ws[XLSX.utils.encode_cell({c: tb.s.c+1, r: 0})] = { v: 'Rule'};
    ws[XLSX.utils.encode_cell({c: tb.s.c+2, r: 0})] = { v: 'Conditions'};

    // loop through row -> col
    let lp = tb.s.r+1;
    for(const rule of this.constructR){
      const sumOfConditions = sum(rule.rules.reduce((acc:any, el:any) => el.conditions.length+acc, 0));
      const b = tb.s.c;
        
      //Ruleset
      ws[XLSX.utils.encode_cell({c: b, r: lp})] = { v: rule.name };
      
      // Condition TODO
      let str = 'WHEN ';

      // WHEN Fact_type IS Value_type THEN Event_type
      // WHEN (__ IS __) AND (__IS__) THEN __
      rule.rules.map((el: any) => {
        el.conditions.map((condition:any) => {
          
        })
      });

      ws[XLSX.utils.encode_cell({c: b+1, r: lp})] = { v: rule.rules.length }
      
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


    // Get only rules
    const vr = this.constructR.reduce((acc, el) => { return [... acc, el.rules] }, []);

    let ws2: XLSX.WorkSheet = this.cellStyle(XLSX.utils.json_to_sheet(this.constructR));

    ws2 = this.createTable(ws2);

    console.log({ws2});

    XLSX.utils.book_append_sheet(wb, ws2, 'Rulesets');


    // save to file
    XLSX.writeFile(wb, `${this.user? this.user: 'user'}-Simulation-Results.xlsx`, {cellStyles: true});
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