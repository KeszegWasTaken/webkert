import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DetailsRoutingModule } from './details-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule, DetailsRoutingModule, MatCardModule, MatTabsModule, MatIconModule, MatButtonModule
  ],
  exports: [DetailsComponent]
})
export class DetailsModule { }
