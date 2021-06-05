import { MedicationstatementAddComponent } from './../../add/medicationstatement-add/medicationstatement-add.component';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FbBaseService } from './../../../../services/fb-base.service';
import { Medicationstatement } from './../../../../shared/models/medicationstatement.model';
import { Observable, throwError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { catchError, debounceTime, map, startWith } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-medicationstatement-list',
  templateUrl: './medicationstatement-list.component.html',
  styleUrls: ['./medicationstatement-list.component.scss']
})
export class MedicationstatementListComponent implements OnInit {
  myControl: FormControl = new FormControl();
  options: string[] = ["one"];
  filteredOptions: Observable<string[]> | null = null;

  title = 'Medication Statements';
  list$: Observable<Medicationstatement[]> | null = null;
  errorObject = null;
  constructor(private service: FbBaseService<Medicationstatement>, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
    this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), debounceTime(250),map(value=>this._filter(value)));
  }
  private _filter(value: string): string[] {
    const filtervalue = value.toLowerCase();
    return this.options.filter(option=>option.toLowerCase().includes(filtervalue));
  }

  get(): void{
    this.errorObject = null;
    this.list$ = this.service.get('medicationstatements').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }
  onGetMedicationStatement(event: Medicationstatement): void{
    this.router.navigateByUrl('/details/medicationstatements/'+event.id);
  }

   addNewDialog(): void{
    const dialogRef = this.dialog.open(MedicationstatementAddComponent, {});
    dialogRef.afterClosed().subscribe((medicationstatement: Medicationstatement)=>{
      if(medicationstatement){
        this.service.add('medicationstatements', medicationstatement);
      }
    }, (err: any) =>{console.warn(err);}
    );
  }
}
