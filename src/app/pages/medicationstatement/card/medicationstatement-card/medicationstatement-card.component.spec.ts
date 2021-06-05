import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationstatementCardComponent } from './medicationstatement-card.component';

describe('MedicationstatementCardComponent', () => {
  let component: MedicationstatementCardComponent;
  let fixture: ComponentFixture<MedicationstatementCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicationstatementCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationstatementCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
