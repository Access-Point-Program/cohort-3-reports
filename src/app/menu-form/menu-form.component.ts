import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Layout } from '../layout';
import { Menu } from './menu';
import { Ruleset } from '../Ruleset';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent implements OnChanges{

  @Input() Layouts:Layout[] = [];
  @Input() Rulesets: Ruleset[] = [];

  @Output() userSelections: any = new EventEmitter<[]>();


  rulesetselection: string = '';
  powersselection: string = '';

  // model = new Menu(18,'Dr. IQ',this.powers[0]);
  constructor(){}

  submitted = false;
  onSubmit() { this.submitted = true; }

  ngOnChanges(_changes: SimpleChanges){
    this.submitted = false;
    
  }


  
  selection(one:string){this.rulesetselection= one} 
  selections(one:string){this.powersselection= one}
   
}

