import { FormControl, FormGroup } from '@angular/forms';
export function getMedication(): FormGroup{
    return new FormGroup({
        code: new FormControl()
    });
}