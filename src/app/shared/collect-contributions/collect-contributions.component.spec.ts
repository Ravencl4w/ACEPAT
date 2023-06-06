import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectContributionsComponent } from './collect-contributions.component';

describe('CollectContributionsComponent', () => {
  let component: CollectContributionsComponent;
  let fixture: ComponentFixture<CollectContributionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectContributionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
