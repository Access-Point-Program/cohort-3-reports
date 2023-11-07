import { Component } from '@angular/core';
import { Results } from '../Results';
import { TableService } from '../table.service';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent {
  results: Results[] = [];
  ngOnInit() {this.results = this.tableService.getResults();}
  constructor(private tableService: TableService){}
  getResults(): void {
    this.results = this.tableService.getResults();
  }
}
