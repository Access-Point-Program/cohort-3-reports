import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Results } from '../Results';
import { AppService } from '../app.service';
import { th } from 'date-fns/locale';


@Component({
	selector: 'table-component',
	templateUrl: './tables.component.html',
})
export class TableComponent implements OnInit {
	RESULTS: Results[] = [];
	
	// For Pagination
	page = 1;
	pageSize = 8;
	collectionSize = this.RESULTS?.length;
	simulations: Results[] = [];

	
	
	constructor(private service: AppService) {	this.refreshResults(); }

	// NG runs this first thing.
	ngOnInit(): void {
		this.getSimulations();
	}

	getSimulations(): void{
		this.service.getResults().subscribe((data) => {
			this.RESULTS = data;
			this.collectionSize = this.RESULTS.length;
			this.refreshResults();
	});
		
	}

	// ngOnChanges(_changes: SimpleChanges){

	// 	// if it detects changes update the same thing to make sure everything works
	// 	this.simulations = this.simulations.sort((a:Results, b:Results) => b.creation_date - a.creation_date);
	// 	this.collectionSize = this.simulations.length;
	// 	this.refreshResults();
	// }

	refreshResults() {
		this.simulations = this.RESULTS.map((results) => ({ ...results })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}
}
