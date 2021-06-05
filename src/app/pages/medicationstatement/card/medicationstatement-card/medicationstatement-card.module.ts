import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { OnHoverModule } from './../../../../shared/directives/on-hover/on-hover.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicationstatementCardComponent } from './medicationstatement-card.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [MedicationstatementCardComponent],
  imports: [
    CommonModule, MatCardModule, OnHoverModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule
  ],
  exports: [MedicationstatementCardComponent]
})
export class MedicationstatementCardModule { }
