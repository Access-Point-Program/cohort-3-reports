import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Imports
import { HttpClientModule } from '@angular/common/http';
import {
  NgbModule,
  NgbCarouselModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';

// Declarations
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './tables/tables.component';
import { MenuFormComponent } from './menu-form/menu-form.component';
import { FinChartComponent } from './fin-chart/fin-chart.component';
import { TableDirectiveDirective } from './table-directive.directive';
import { MyChartComponent } from './my-chart/my-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { ExporterComponent } from './exporter/exporter.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CarouselComponent,
    TableComponent,
    MenuFormComponent,
    FinChartComponent,
    TableDirectiveDirective,
    MyChartComponent,
    RadarChartComponent,
    ExporterComponent,
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
  bootstrap: [AppComponent],
})
export class AppModule {}
