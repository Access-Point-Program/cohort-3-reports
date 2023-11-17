// import { AppRoutingModule } from './app-routing.module';
//    AppRoutingModule,

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { SidebarComponent } from './sidebar/sidebar.component';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuFormComponent } from './menu-form/menu-form.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MenuFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//createa new config
//4 components