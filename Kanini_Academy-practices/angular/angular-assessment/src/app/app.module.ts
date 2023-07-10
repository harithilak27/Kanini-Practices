import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolutionsComponent } from './solutions/solutions.component';
import {NgTinyUrlService} from 'ng-tiny-url';
import { HttpClientModule } from '@angular/common/http';
import { Solution3Component } from './solution3/solution3.component';

@NgModule({
  declarations: [
    AppComponent,
    SolutionsComponent,
    Solution3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
