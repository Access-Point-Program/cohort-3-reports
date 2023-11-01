// import { AppRoutingModule } from './app-routing.module';
//    AppRoutingModule,

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuFormComponent } from './menu-form/menu-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuFormComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
