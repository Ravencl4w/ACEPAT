import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePartnerDetailDialogComponent } from './delete-partner-detail-dialog.component';

describe('DeletePartnerDetailDialogComponent', () => {
  let component: DeletePartnerDetailDialogComponent;
  let fixture: ComponentFixture<DeletePartnerDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePartnerDetailDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePartnerDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
