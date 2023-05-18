import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccDialogComponent } from './bank-acc-dialog.component';

describe('BankAccDialogComponent', () => {
  let component: BankAccDialogComponent;
  let fixture: ComponentFixture<BankAccDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankAccDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankAccDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
