import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParientesDialogComponent } from './parientes-dialog.component';

describe('ParientesDialogComponent', () => {
  let component: ParientesDialogComponent;
  let fixture: ComponentFixture<ParientesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParientesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParientesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
