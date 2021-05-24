import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MedicationstatementModule } from './pages/medicationstatement/medicationstatement.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MedicationstatementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
