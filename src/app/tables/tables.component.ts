import { Component, Input, OnChanges, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { Results } from '../Results';
import { SortEvent, TableDirectiveDirective } from '../table-directive.directive';

const compare = (v1: string | number | boolean, v2: string | number | boolean) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

@Component({
	selector: 'table-component',
	templateUrl: './tables.component.html',
})
export class TableComponent implements OnChanges {

	@ViewChildren(TableDirectiveDirective) headers!: QueryList<TableDirectiveDirective>;

	@Input() RESULTS: Results[] = [];
	
	// For Pagination
	page = 1;
	pageSize = 10;
	collectionSize = this.RESULTS.length;
	sims: Results[] = this.RESULTS;
	simulations: Results[] = [];
	
	constructor() { this.refreshResults(); }

	// Update on changes to @Input
	ngOnChanges(_changes: SimpleChanges){
		// if it detects changes update the same thing to make sure everything works
		this.sims = this.RESULTS.sort((a:Results, b:Results) => b.creation_date - a.creation_date);
		this.collectionSize = this.RESULTS.length;
		this.refreshResults();
	}

	// For Pagination
	refreshResults() {
		this.simulations = this.sims.map((results) => ({ ...results })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}

	// For Sorting 
	onSort({ column, direction }: SortEvent) {
		// resetting other headers
		for (const header of this.headers) {
			if (header.sortable !== column) {
				header.direction = '';
			}
		}
		if (direction === '' || column === '') {
			this.sims = this.RESULTS;
		} else {
			this.sims = [...this.RESULTS].sort((a, b) => {
				const res = compare(a[column], b[column]);
				return direction === 'asc' ? res : -res;
			});
		}
		this.refreshResults();
	}
}
