import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl('', [Validators.required, Validators.minLength(8)]),
    password2: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  error = false;

  constructor(private router: Router) { }

  register():void{
    this.error = false;
    if(this.form.valid){
      if(this.form.value.password1 === this.form.value.password2){
        this.router.navigateByUrl('/login');
        return;
      }
    }
    this.error = true;
  }
}
