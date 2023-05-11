import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerCreationDialogComponent } from './partner-creation-dialog.component';

describe('PartnerCreationDialogComponent', () => {
  let component: PartnerCreationDialogComponent;
  let fixture: ComponentFixture<PartnerCreationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerCreationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerCreationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
