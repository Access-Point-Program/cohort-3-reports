import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Layout } from '../layout';
import { Ruleset } from '../Ruleset';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css'],
})
export class MenuFormComponent implements OnChanges {
  @Input() Layouts: Layout[] = [];
  @Input() Rulesets: Ruleset[] = [];

  // Event emmiter to show that the user selected something
  @Output() userSelections: any = new EventEmitter<{
    [key: string]: number | undefined;
  }>();

  rulesetSelection?: Ruleset;
  layoutSelection?: Layout;

  constructor() { }



  ngOnChanges(_changes: SimpleChanges) {//default
    this.Layouts= this.Layouts.sort((a:Layout, b:Layout) => b.creation_date - a.creation_date); 
    this.Rulesets= this.Rulesets.sort((a:Ruleset, b:Ruleset) => b.creation_date - a.creation_date); //most recent one is at the top
    
   }


  ngOnChanges(_changes: SimpleChanges) {}

  selectRuleset(one: Ruleset | undefined = undefined) {
    this.rulesetSelection = one;

    this.userSelections.emit({
      ruleset: this.rulesetSelection?.id,
      layout: this.layoutSelection?.id,
    });
  }

  selectLayout(one: Layout | undefined = undefined) {
    this.layoutSelection = one;

    this.userSelections.emit({
      ruleset: this.rulesetSelection?.id,
      layout: this.layoutSelection?.id,
    });
  }
}
