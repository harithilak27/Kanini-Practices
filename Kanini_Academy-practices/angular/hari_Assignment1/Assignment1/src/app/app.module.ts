import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './question-1/warning-alert.component';
import { SuccessAlertComponent } from './question-2/success-alert.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './question-3/calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    CalculatorComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
