import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WorthItCalculatorComponent } from './worth-it-calculator/worth-it-calculator.component';
import { ReactiveFormsModule } from "@angular/forms";
import { NgOptimizedImage } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    WorthItCalculatorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
