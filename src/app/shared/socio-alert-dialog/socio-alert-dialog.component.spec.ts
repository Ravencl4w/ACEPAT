import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioAlertDialogComponent } from './socio-alert-dialog.component';

describe('SocioAlertDialogComponent', () => {
  let component: SocioAlertDialogComponent;
  let fixture: ComponentFixture<SocioAlertDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocioAlertDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocioAlertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
