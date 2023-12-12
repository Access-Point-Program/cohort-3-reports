import { Component, Input } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { Results } from '../Results';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  // Data Flow
  @Input() Simulations: Results[] = [];
}
