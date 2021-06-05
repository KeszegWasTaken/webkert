import { TitleService } from './services/routing/title.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private TitleService: TitleService){
    this.TitleService.refreshTitle();
  }
}
