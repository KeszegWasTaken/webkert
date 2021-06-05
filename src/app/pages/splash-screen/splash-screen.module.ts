import { ContainerModule } from './../../shared/components/container/container.module';
import { SplashScreenRoutingModule } from './splash-screen-routing.module';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from './splash-screen.component';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';
import { MatRipple, MatRippleModule } from '@angular/material/core';



@NgModule({
  declarations: [SplashScreenComponent],
  imports: [
    CommonModule,
    MatCardModule,
    OnHoverModule,
    MatRippleModule,
    SplashScreenRoutingModule,
    ContainerModule
  ],
  exports: [SplashScreenComponent]
})
export class SplashScreenModule { }
