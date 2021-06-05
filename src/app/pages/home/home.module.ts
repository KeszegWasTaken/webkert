import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavigationModule } from '../navigation/navigation.module';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NavigationModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
