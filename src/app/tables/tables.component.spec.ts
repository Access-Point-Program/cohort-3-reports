import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './tables.component';
import { By } from '@angular/platform-browser';
import { CarouselComponent } from '../carousel/carousel.component';
import { NgbCarouselModule, NgbPaginationModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';
import { DebugElement } from '@angular/core';
import { Results } from '../Results';
import { TableDirectiveDirective } from '../table-directive.directive';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let table: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent, CarouselComponent],
      imports:[NgbCarouselModule,
        NgbPaginationModule,
        NgChartsModule,
        NgbModule]
    });
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    table = fixture.debugElement.query(By.css(".table"));
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    
    expect(fixture.debugElement.query(By.css('.text-muted')).nativeElement.textContent).toContain("Simulation Analytics");
  });

  it('should render a table', () => {
    const table = fixture.debugElement.query(By.css(".table"));

    expect(table).toBeTruthy();
  });

  it('should have correct amount of cols', () => {
    
    expect(table.children[0].children[0].children.length).toEqual(6);
  });

  it('should render all the available data', () =>{

    expect(table.children[1].children.length).toEqual(component.simulations.length);
  });

  it('should render updated data OnChanges',  () =>{

    const mockSim: Results[] = [{ruleset: 'mock', layout: 'mock', creation_date: 2, iterations_max: 100, iterations_used: 10, successful: true}];

    component.simulations = mockSim;

    fixture.detectChanges();

    expect(table.children[1].children.length).toEqual(mockSim.length);
  });

  it('should render updated data OnChanges and apply all attributes',  () =>{

    const mockSim: Results[] = [{ruleset: 'mock', layout: 'mock', creation_date: 2, iterations_max: 100, iterations_used: 10, successful: true}];

    component.simulations = mockSim;

    fixture.detectChanges();

    expect(table.children[1].children[0].children.length).toEqual(Object.keys(mockSim[0]).length);
  });

  it('should render the tableDirective', () => {
    expect(fixture.debugElement.queryAll(By.directive(TableDirectiveDirective))).toBeTruthy();
  })


  it('should render pagination', () =>{
    const pagination = fixture.nativeElement.querySelector("ngb-pagination") as HTMLElement;

    expect(pagination).toBeTruthy();
  });

});
