import { Component, OnInit } from '@angular/core';
import { DecimalPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableService } from '../table.service';
import { Results } from '../Results';


@Component({
	selector: 'table-component',
	templateUrl: './tables.component.html',
})
export class TableComponent implements OnInit{
	RESULTS: Results[] = [];
	page = 1;
	pageSize = 10;
	collectionSize = this.RESULTS.length;
	

	constructor(private service:TableService) {
		this.refreshResults();
	}

	ngOnInit(): void {
		this.service.getResults().subscribe((data)=>{this.RESULTS = data});
		this.collectionSize = this.RESULTS.length;
	}

	refreshResults() {
		this.RESULTS = this.RESULTS.map((result) => ({ ...result })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}
}
