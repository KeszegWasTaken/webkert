import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationstatementListComponent } from './medicationstatement-list.component';

describe('MedicationstatementListComponent', () => {
  let component: MedicationstatementListComponent;
  let fixture: ComponentFixture<MedicationstatementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicationstatementListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationstatementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
