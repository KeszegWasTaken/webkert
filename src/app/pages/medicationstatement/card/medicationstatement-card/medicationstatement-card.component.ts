import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { getMedicationStatementForm } from 'src/app/shared/forms/medicationstatement.form';
import { Medicationstatement } from 'src/app/shared/models/medicationstatement.model';

@Component({
  selector: 'app-medicationstatement-card',
  templateUrl: './medicationstatement-card.component.html',
  styleUrls: ['./medicationstatement-card.component.scss']
})
export class MedicationstatementCardComponent implements OnInit {
  @Input() medicationstatement: Medicationstatement = [] as any;
  @Output() getMedicationStatement = new EventEmitter<Medicationstatement>();
  medications: any[] = [];
  form: FormGroup = new FormGroup({});
  constructor(private service: FbBaseService<Medicationstatement>) { }

  ngOnInit(): void {
        for (let values of this.medicationstatement.medication) {
          this.medications.push(values);
        }
  }
  
  
}
