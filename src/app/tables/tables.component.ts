import { Component } from '@angular/core';
import { DecimalPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Entries {
	id?: number;
	name: string;
	flag: string;
	area: number;
	population: number;
	success ?: boolean;
}

const RESULTS: Entries[] = [
	{
		name: 'Russia',
		flag: 'f/f3/Flag_of_Russia.svg',
		area: 17075200,
		population: 146989754,
		success: true,
	},
	{
		name: 'France',
		flag: 'c/c3/Flag_of_France.svg',
		area: 640679,
		population: 64979548,
		success: false,
	},
	{
		name: 'Germany',
		flag: 'b/ba/Flag_of_Germany.svg',
		area: 357114,
		population: 82114224,
		success: true,
	},
	{
		name: 'Portugal',
		flag: '5/5c/Flag_of_Portugal.svg',
		area: 92090,
		population: 10329506,
		success: false,
	},
	{
		name: 'Canada',
		flag: 'c/cf/Flag_of_Canada.svg',
		area: 9976140,
		population: 36624199,
		success: true,
	},
	{
		name: 'Vietnam',
		flag: '2/21/Flag_of_Vietnam.svg',
		area: 331212,
		population: 95540800,
		success: false,
	},
	{
		name: 'Brazil',
		flag: '0/05/Flag_of_Brazil.svg',
		area: 8515767,
		population: 209288278,
	},
	{
		name: 'Mexico',
		flag: 'f/fc/Flag_of_Mexico.svg',
		area: 1964375,
		population: 129163276,
	},
	{
		name: 'United States',
		flag: 'a/a4/Flag_of_the_United_States.svg',
		area: 9629091,
		population: 324459463,
	},
	{
		name: 'India',
		flag: '4/41/Flag_of_India.svg',
		area: 3287263,
		population: 1324171354,
	},
	{
		name: 'Indonesia',
		flag: '9/9f/Flag_of_Indonesia.svg',
		area: 1910931,
		population: 263991379,
	},
	{
		name: 'Tuvalu',
		flag: '3/38/Flag_of_Tuvalu.svg',
		area: 26,
		population: 11097,
	},
	{
		name: 'China',
		flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
		area: 9596960,
		population: 1409517397,
	},
];

@Component({
	selector: 'table-component',
	templateUrl: './tables.component.html',
})
export class TableComponent {
	page = 1;
	pageSize = 10;
	collectionSize = RESULTS.length;
	RESULTS?: Entries[];

	constructor() {
		this.refreshResults();
	}

	refreshResults() {
		this.RESULTS = RESULTS.map((result, i) => ({ id: i + 1, ...result })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}
}
