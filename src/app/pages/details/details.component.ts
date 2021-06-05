import { Medicationstatement } from 'src/app/shared/models/medicationstatement.model';
import { FbBaseService } from './../../services/fb-base.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id='';
  dataNameStr='';
  inData$: Observable<any> = [] as any;
  medications:any[] = [];
  dates:any[] = [];
  statement: Medicationstatement = [] as any;
  constructor(private router: Router, private route: ActivatedRoute, private service: FbBaseService<any>, private location: Location) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    if(params?.id){
      this.id = params.id;
      this.dataNameStr = params.dataNameStr;
      this.getItem();
      this.inData$.subscribe(event => {
        for (let values of event.medication) {
          this.medications.push(values);
        }
        for (let values of event.effective) {
          this.dates.push(values);
        }
      });
      
    }
  }

  getItem(): void{
    this.inData$ = this.service.getById(this.dataNameStr, this.id);
  }

  close(): void {
    this.location.back();
  }
  delete(collectionName: string, id: string): void{
    this.service.delete(collectionName, id);
    this.navTo('/home/medicationstatements');
  }

  navTo(url: string): void{
    this.router.navigateByUrl(url);
  }
}
