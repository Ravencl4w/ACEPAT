import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAcopioComponent } from './centro-acopio.component';

describe('CentroAcopioComponent', () => {
  let component: CentroAcopioComponent;
  let fixture: ComponentFixture<CentroAcopioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentroAcopioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroAcopioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
