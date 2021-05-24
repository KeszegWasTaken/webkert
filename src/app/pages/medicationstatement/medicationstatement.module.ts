import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicationstatementComponent } from './medicationstatement.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [MedicationstatementComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    MatCardModule
  ],
  exports: [
    MedicationstatementComponent
  ]
})
export class MedicationstatementModule { }
