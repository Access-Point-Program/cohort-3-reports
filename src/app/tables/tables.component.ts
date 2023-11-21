import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Results } from '../Results';


@Component({
	selector: 'table-component',
	templateUrl: './tables.component.html',
})
export class TableComponent implements OnChanges {

	@Input() RESULTS: Results[] = [];
	
	// For Pagination
	page = 1;
	pageSize = 8;
	collectionSize = this.RESULTS.length;
	simulations: Results[] = [];
	
	constructor() { this.refreshResults(); }

	ngOnChanges(_changes: SimpleChanges){

		// if it detects changes update the same thing to make sure everything works
		this.RESULTS = this.RESULTS.sort((a:Results, b:Results) => b.creation_date - a.creation_date);
		this.collectionSize = this.RESULTS.length;
		this.refreshResults();
	}

	refreshResults() {
		this.simulations = this.RESULTS.map((results) => ({ ...results })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}
}
