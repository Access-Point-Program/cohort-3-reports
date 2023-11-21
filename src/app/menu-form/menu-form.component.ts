import { Component, OnInit } from '@angular/core';
import { Layout } from '../layout';
import { Menu } from './menu';
import { Ruleset } from '../Ruleset';
import { AppService } from '../app.service';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent implements OnInit{

  Layouts:Layout[] = [];
  Rulesets: Ruleset[] = [];
  rulesetselection: string = '';
  powersselection: string = '';

  // model = new Menu(18,'Dr. IQ',this.powers[0]);
  constructor(private service: AppService){}

  submitted = false;
  onSubmit() { this.submitted = true; }

  ngOnInit(): void {
    this.service.getLayouts().subscribe((data) => { this.Layouts = data});
    this.service.getRulesets().subscribe((data) => { this.Rulesets = data});
  }

  
  selection(one:string){this.rulesetselection= one} 
  selections(one:string){this.powersselection= one}
   
}

