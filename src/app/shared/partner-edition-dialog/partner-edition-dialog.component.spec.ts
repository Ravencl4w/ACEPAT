import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerEditionDialogComponent } from './partner-edition-dialog.component';

describe('PartnerEditionDialogComponent', () => {
  let component: PartnerEditionDialogComponent;
  let fixture: ComponentFixture<PartnerEditionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerEditionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerEditionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
