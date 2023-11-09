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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CarouselComponent,
    FinancialChartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgChartsModule,
    NgbCarouselModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
