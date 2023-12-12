import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Results } from './Results';

// Custom types to make things easier
export type SortColumn = keyof Results | '';
export type SortDirection = 'asc' | 'desc' | '';

// Quick function to rotate what order to set
const rotate: { [key: string]: SortDirection } = {
  asc: 'desc',
  desc: '',
  '': 'asc',
};

// Interface as return type
export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()',
  },
})
export class TableDirectiveDirective {
  // Inputs from directive
  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  // Rotate
  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }

  constructor() {}
}
