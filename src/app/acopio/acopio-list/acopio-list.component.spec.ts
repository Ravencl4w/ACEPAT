import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcopioListComponent } from './acopio-list.component';

describe('AcopioListComponent', () => {
  let component: AcopioListComponent;
  let fixture: ComponentFixture<AcopioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcopioListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcopioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
