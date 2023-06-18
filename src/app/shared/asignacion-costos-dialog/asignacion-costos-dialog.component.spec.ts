import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionCostosDialogComponent } from './asignacion-costos-dialog.component';

describe('AsignacionCostosDialogComponent', () => {
  let component: AsignacionCostosDialogComponent;
  let fixture: ComponentFixture<AsignacionCostosDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignacionCostosDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignacionCostosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
