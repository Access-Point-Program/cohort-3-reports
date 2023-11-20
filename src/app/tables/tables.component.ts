import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Results } from '../Results';
import { AppService } from '../app.service';


@Component({
	selector: 'table-component',
	templateUrl: './tables.component.html',
})
export class TableComponent implements OnInit {
	simulations: Results[] = [];
	// For Pagination
	page = 1;
	pageSize = 7;
	collectionSize = this.simulations.length;
	RESULTS!: Results[];

	
	
	constructor(private service: AppService) {}

	// NG runs this first thing.
	ngOnInit(): void {
		console.log(this.simulations)
		
		this.service.getResults().subscribe((data) => {this.simulations = data; console.log(this.simulations)});

		this.collectionSize = this.simulations.length;

		this.refreshResults();
	}

	// ngOnChanges(_changes: SimpleChanges){

	// 	// if it detects changes update the same thing to make sure everything works
	// 	this.simulations = this.simulations.sort((a:Results, b:Results) => b.creation_date - a.creation_date);
	// 	this.collectionSize = this.simulations.length;
	// 	this.refreshResults();
	// }

	refreshResults() {
		this.RESULTS = this.simulations.map((result) => ({ ...result })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}
}
