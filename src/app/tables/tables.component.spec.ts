import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './tables.component';
import { By } from '@angular/platform-browser';
import { CarouselComponent } from '../carousel/carousel.component';
import { NgbCarouselModule, NgbPaginationModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a table', () => {
    const table = fixture.debugElement.query(By.css(".table"));

    console.log(table);
    expect(table).toBeTruthy();
  })
});
