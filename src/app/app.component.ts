import { Component } from '@angular/core';
import { RulesetService } from './rulesets.service';
import { DatePipe } from '@angular/common';
import { Ruleset } from './Ruleset';
import { LayoutService } from './layout.service';
import { Layout } from './layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})
export class AppComponent {
  rulesets: Ruleset[] = [];
	Layout: Layout[] = [];
  
  constructor(private rulesetService: RulesetService, private layoutService:LayoutService, private datePipe: DatePipe){}

  ngOnInit(){
    this.getRulesets();
    //this.service.getLayouts().subscribe((data)=>{this.Layout = data});
  }

  getRulesets(){
    return this.service.getRulesets()
      .subscribe(data => this.rulesets = data);
  }

  //format from date to vielable date and time
  // format(date: string): void{
  //   this.layouts = data;
  //   this.layouts.map(el =>
  //     {
  //       el.creation_date = this.datePipe.transform(el.creation_date, 'MM/dd/yyyy hh:mm a')
  //     })
  // }
}
