import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcopioDialogComponent } from './acopio-dialog.component';

describe('AcopioDialogComponent', () => {
  let component: AcopioDialogComponent;
  let fixture: ComponentFixture<AcopioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcopioDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcopioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
