import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationstatementAddComponent } from './medicationstatement-add.component';

describe('MedicationstatementAddComponent', () => {
  let component: MedicationstatementAddComponent;
  let fixture: ComponentFixture<MedicationstatementAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicationstatementAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationstatementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
