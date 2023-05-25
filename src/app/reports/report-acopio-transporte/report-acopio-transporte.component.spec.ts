import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAcopioTransporteComponent } from './report-acopio-transporte.component';

describe('ReportAcopioTransporteComponent', () => {
  let component: ReportAcopioTransporteComponent;
  let fixture: ComponentFixture<ReportAcopioTransporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportAcopioTransporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportAcopioTransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
