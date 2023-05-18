import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundoDialogComponent } from './fundo-dialog.component';

describe('FundoDialogComponent', () => {
  let component: FundoDialogComponent;
  let fixture: ComponentFixture<FundoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
