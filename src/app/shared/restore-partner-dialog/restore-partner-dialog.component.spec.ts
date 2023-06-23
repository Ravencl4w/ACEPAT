import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorePartnerDialogComponent } from './restore-partner-dialog.component';

describe('RestorePartnerDialogComponent', () => {
  let component: RestorePartnerDialogComponent;
  let fixture: ComponentFixture<RestorePartnerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestorePartnerDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestorePartnerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
