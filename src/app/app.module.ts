// import { AppRoutingModule } from './app-routing.module';
//    AppRoutingModule,

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { SidebarComponent } from './sidebar/sidebar.component';
// import {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuFormComponent } from './menu-form/menu-form.component';
import { NgChartsModule } from 'ng2-charts';
import { MyChartComponent } from './Compenents/my-chart/my-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MenuFormComponent,
    MyChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgChartsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//createa new config
//4 components