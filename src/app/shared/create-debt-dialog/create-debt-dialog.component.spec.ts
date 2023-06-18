import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDebtDialogComponent } from './create-debt-dialog.component';

describe('CreateDebtDialogComponent', () => {
  let component: CreateDebtDialogComponent;
  let fixture: ComponentFixture<CreateDebtDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDebtDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDebtDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
