import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicationstatementAddComponent } from './medicationstatement-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    MedicationstatementAddComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatDialogModule, MatFormFieldModule,
    MatCardModule, MatIconModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule
  ],
  entryComponents: [MedicationstatementAddComponent],
  exports: [MedicationstatementAddComponent] 
})
export class MedicationstatementAddModule { }
