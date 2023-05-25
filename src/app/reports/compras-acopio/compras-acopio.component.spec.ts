import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasAcopioComponent } from './compras-acopio.component';

describe('ComprasAcopioComponent', () => {
  let component: ComprasAcopioComponent;
  let fixture: ComponentFixture<ComprasAcopioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprasAcopioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprasAcopioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
