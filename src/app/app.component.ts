import { Component } from '@angular/core';
import { RulesetService } from './rulesets.service';
import { DatePipe } from '@angular/common';
import { Ruleset } from './Ruleset';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})
export class AppComponent {
  title?: string;

  rulesets: Ruleset[] = [];

  constructor(private service: RulesetService, private datePipe: DatePipe){}

  ngOnInit(){
    this.getRulesets();
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
