import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './tables/tables.component';
import {NgbPaginationModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SidebarComponent } from './sidebar/sidebar.component';
// import {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuFormComponent } from './menu-form/menu-form.component';
import { NgChartsModule } from 'ng2-charts';
import { MyChartComponent } from './Compenents/my-chart/my-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TableComponent,
    MenuFormComponent,
    MyChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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