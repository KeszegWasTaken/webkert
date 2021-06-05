import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { PAGESWITCH } from 'src/app/shared/database/pageswitch.database';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  pageswitch = PAGESWITCH;
  constructor(private router: Router, private authService: AuthService) { }
  
  logout(): void{
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
