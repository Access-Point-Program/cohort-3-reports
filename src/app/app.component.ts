
import { Component, OnInit } from '@angular/core';
import { DecimalPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutService } from './layout.service';
import { Layout } from './layout';

@Component({
	selector: 'app-component',
	templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
	Layout: Layout[] = [];

	
	

	constructor(private service:LayoutService) {
		
	}

	ngOnInit(): void {
		//this.service.getLayouts().subscribe((data)=>{this.Layout = data});
		
  }
}
