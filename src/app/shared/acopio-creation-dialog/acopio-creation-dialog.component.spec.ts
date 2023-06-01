import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcopioCreationDialogComponent } from './acopio-creation-dialog.component';

describe('AcopioCreationDialogComponent', () => {
  let component: AcopioCreationDialogComponent;
  let fixture: ComponentFixture<AcopioCreationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcopioCreationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcopioCreationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
