import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AportMovementComponent } from './aport-movement.component';

describe('AportMovementComponent', () => {
  let component: AportMovementComponent;
  let fixture: ComponentFixture<AportMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AportMovementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AportMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
