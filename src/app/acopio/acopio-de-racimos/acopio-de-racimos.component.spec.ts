import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcopioDeRacimosComponent } from './acopio-de-racimos.component';

describe('AcopioDeRacimosComponent', () => {
  let component: AcopioDeRacimosComponent;
  let fixture: ComponentFixture<AcopioDeRacimosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcopioDeRacimosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcopioDeRacimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
