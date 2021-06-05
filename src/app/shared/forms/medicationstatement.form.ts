import { FormGroup, FormControl, FormArray } from '@angular/forms';
export function getMedicationStatementForm(): FormGroup{
    return new FormGroup({
        id: new FormControl(),
        status: new FormControl(),
        category: new FormControl(),
        medication: new FormArray([]),
        subject: new FormControl(''),
        effective: new FormArray([]),
        dosage: new FormControl()
    });
}