import { FormControl, FormGroup } from '@angular/forms';
export function getEffective(): FormGroup{
    return new FormGroup({
        effectiveDateTime: new FormControl()
    });
}