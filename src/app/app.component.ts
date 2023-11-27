import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Ruleset } from './Ruleset';
import { Layout } from './layout';
import { Results } from './Results';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent implements OnInit {
  Rulesets: Ruleset[] = [];
  Layouts: Layout[] = [];
  Simulations: Results[] = [];

  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.getLayouts();
    this.getRulesets();
    this.getSimulations();
  }
  
  userSelection(event: {[key:string]: number}) {
    // make a call with params
    this.service.getResults(event['ruleset'], event['layout']).subscribe((data) => {
      this.Simulations = data;
    })
  }

  getSimulations(): void {
    this.service.getResults().subscribe((data) => {
      this.Simulations = data;
    });
  }

  getLayouts(): void {
    this.service.getLayouts().subscribe((data) => {
      this.Layouts = data;
    });
  }
  getRulesets(): void {
    this.service.getRulesets().subscribe((data) => {
      this.Rulesets = data;
    });
  }
}
