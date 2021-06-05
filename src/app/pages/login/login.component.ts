import { AuthService } from './../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  alertMessage= '';
  alertsList: any = {
    user: () => 'Hibás E-mail cím vagy jelszó.',
    server: () => 'A szolgáltatás nem elérhető.',
    false: () => ''
  };

  @HostListener('document:keydown.enter') onKeyDownHandler(){
    this.login();
  }
  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
    this.authService.logout();
  }

  navTo(url: string): void{
    this.router.navigateByUrl(url);
  }
  login(): void{
    if(this.form.invalid){
      return;
    }
    this.authService.login(this.form.value.email, this.form.value.password).then(
      result => {
        console.log(result);
        this.navTo('/home');
      },
      (error)=>{
        this.alertMessage = (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password')
          ? this.alertsList.user() : this.alertsList.server();
      }
    );
  }
}
