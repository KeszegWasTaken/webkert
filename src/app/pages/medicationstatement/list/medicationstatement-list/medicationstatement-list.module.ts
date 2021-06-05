import { MedicationstatementAddModule } from './../../add/medicationstatement-add/medicationstatement-add.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ContainerModule } from './../../../../shared/components/container/container.module';
import { MedicationstatementCardModule } from './../../card/medicationstatement-card/medicationstatement-card.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MedicationstatementRoutingModule } from './medicationstatement-list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicationstatementListComponent } from './medicationstatement-list.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    MedicationstatementListComponent
  ],
  imports: [
    CommonModule, MedicationstatementRoutingModule, MatToolbarModule, ContainerModule, MedicationstatementCardModule,
    MatAutocompleteModule, MatInputModule, FormsModule, ReactiveFormsModule, MatIconModule, MatDialogModule, MatButtonModule,
    MedicationstatementAddModule
  ]
})
export class MedicationstatementListModule { }
