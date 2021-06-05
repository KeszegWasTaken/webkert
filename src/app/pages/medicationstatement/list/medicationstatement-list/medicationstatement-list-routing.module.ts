import { MedicationstatementListComponent } from './medicationstatement-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: MedicationstatementListComponent,
        data: { title: 'Medication Statements - Webkert' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MedicationstatementRoutingModule { }