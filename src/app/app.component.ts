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

  // Take input from menu-form component
  userSelection(event: { [key: string]: number }) {
    // make a call with params
    this.service
      .getResults(event['ruleset'], event['layout'])
      .subscribe((data) => {
        this.Simulations = data;
      });
  }

  // Call service for Simulation Results
  getSimulations(): void {
    this.service.getResults().subscribe((data) => {
      this.Simulations = data;
    });
  }

  // Call service for Layouts
  getLayouts(): void {
    this.service.getLayouts().subscribe((data) => {
      this.Layouts = data;
    });
  }

  // Call service for Results
  getRulesets(): void {
    this.service.getRulesets().subscribe((data) => {
      this.Rulesets = data;
    });
  }
}
