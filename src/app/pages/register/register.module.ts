import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule, MatCardModule, MatButtonModule, RegisterRoutingModule, FormsModule, ReactiveFormsModule, MatFormFieldModule,
    MatInputModule, MatChipsModule
  ]
})
export class RegisterModule { }
