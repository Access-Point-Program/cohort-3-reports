import { Component } from '@angular/core';

import { Menu } from '../menu';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent {

  powers = ['Layout Filter One', 'Layout Filter Two',
            'Layout Filter Three', 'Layout Filter Four'];
  ruleset = [' RuleSet Filter One', ' RuleSet Filter Two',
            'RuleSet Filter Three', 'RuleSet Filter Four'];
  rulesetselection?: string;

  model = new Menu(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

   selection(one:string){this.rulesetselection= one} 
   
}

