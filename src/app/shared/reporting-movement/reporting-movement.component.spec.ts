import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingMovementComponent } from './reporting-movement.component';

describe('ReportingMovementComponent', () => {
  let component: ReportingMovementComponent;
  let fixture: ComponentFixture<ReportingMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportingMovementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportingMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
