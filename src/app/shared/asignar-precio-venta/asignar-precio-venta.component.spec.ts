import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarPrecioVentaComponent } from './asignar-precio-venta.component';

describe('AsignarPrecioVentaComponent', () => {
  let component: AsignarPrecioVentaComponent;
  let fixture: ComponentFixture<AsignarPrecioVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarPrecioVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarPrecioVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
