import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { NgbModule, NgbCarouselModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

import { CarouselComponent } from './carousel/carousel.component';
import { NgChartsModule } from 'ng2-charts';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './tables/tables.component';
import { MenuFormComponent } from './menu-form/menu-form.component';

import { PieChartComponent } from './pie-chart/pie-chart.component';
import { FinChartComponent } from './fin-chart/fin-chart.component';
import { TableDirectiveDirective } from './table-directive.directive';

import { MyChartComponent } from './my-chart/my-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CarouselComponent,
    TableComponent,
    MenuFormComponent,
    PieChartComponent,
    FinChartComponent,
    TableDirectiveDirective,
    MyChartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgChartsModule,
    NgbCarouselModule,
    NgbPaginationModule,
    NgChartsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//createa new config
//4 components