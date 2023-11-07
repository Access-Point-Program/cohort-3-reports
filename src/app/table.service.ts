import { Injectable } from '@angular/core';
import { Results } from './Results';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  getResults():Results[] {
    let mockData : Results [] = [{name: "String"}];
    return mockData
  }
}
