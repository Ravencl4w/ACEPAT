import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerDetailEditionDialogComponent } from './partner-detail-edition-dialog.component';

describe('PartnerDetailEditionDialogComponent', () => {
  let component: PartnerDetailEditionDialogComponent;
  let fixture: ComponentFixture<PartnerDetailEditionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerDetailEditionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerDetailEditionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
