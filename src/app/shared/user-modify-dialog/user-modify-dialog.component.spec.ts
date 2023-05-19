import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModifyDialogComponent } from './user-modify-dialog.component';

describe('UserModifyDialogComponent', () => {
  let component: UserModifyDialogComponent;
  let fixture: ComponentFixture<UserModifyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserModifyDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserModifyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
