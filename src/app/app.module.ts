// import { AppRoutingModule } from './app-routing.module';
//    AppRoutingModule,

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselComponent } from './carousel/carousel.component';
import { FinancialChartComponent } from './financial-chart/financial-chart.component';

import { NgChartsModule } from 'ng2-charts';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './tables/tables.component';
import {NgbPaginationModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
