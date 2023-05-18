import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbigeoDialogComponent } from './ubigeo-dialog.component';

describe('UbigeoDialogComponent', () => {
  let component: UbigeoDialogComponent;
  let fixture: ComponentFixture<UbigeoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbigeoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbigeoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
