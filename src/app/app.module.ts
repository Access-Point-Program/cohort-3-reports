// import { AppRoutingModule } from './app-routing.module';
//    AppRoutingModule,

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NgChartsModule } from 'ng2-charts';
import { ChartJsComponent } from './chart-js/chart-js.component';
import { AngularChartsComponent } from './angular-charts/angular-charts.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartJsComponent,
    AngularChartsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
