import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { getEffective } from 'src/app/shared/forms/effective.form';
import { getMedication } from 'src/app/shared/forms/medication.form';
import { getMedicationStatementForm } from 'src/app/shared/forms/medicationstatement.form';

@Component({
  selector: 'app-medicationstatement-add',
  templateUrl: './medicationstatement-add.component.html',
  styleUrls: ['./medicationstatement-add.component.scss']
})
export class MedicationstatementAddComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  status: string[] = ['active' , 'completed' , 'entered-in-error' , 'intended' , 'stopped' , 'on-hold' , 'unknown' , 'not-taken'];
  category: string[] = ['inpatient' , 'outpatient' , 'community' , 'patientspecified'];
  constructor(public dialogRef: MatDialogRef<MedicationstatementAddComponent>) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void{
    this.form = getMedicationStatementForm();
  }

  addMedication(): void{
    const formArray = this.form?.get('medication') as FormArray;
    formArray.push(getMedication());
  }

  removeMedication(index: number): void{
    const formArray = this.form?.get('medication') as FormArray;
    formArray.removeAt(index);
  }

  get getMedication(): FormArray{
    return this.form?.get('medication') as FormArray;
  }


  addDate(): void{
    const formArray = this.form?.get('effective') as FormArray;
    formArray.push(getEffective());
  }

  removeDate(index: number): void{
    const formArray = this.form?.get('effective') as FormArray;
    formArray.removeAt(index);
  }

  get getDate(): FormArray{
    return this.form?.get('effective') as FormArray;
  }
}
