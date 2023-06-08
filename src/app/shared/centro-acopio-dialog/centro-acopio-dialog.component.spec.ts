import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAcopioDialogComponent } from './centro-acopio-dialog.component';

describe('CentroAcopioDialogComponent', () => {
  let component: CentroAcopioDialogComponent;
  let fixture: ComponentFixture<CentroAcopioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentroAcopioDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroAcopioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
