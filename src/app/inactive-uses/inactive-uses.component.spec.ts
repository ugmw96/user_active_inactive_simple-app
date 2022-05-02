import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveUsesComponent } from './inactive-uses.component';

describe('InactiveUsesComponent', () => {
  let component: InactiveUsesComponent;
  let fixture: ComponentFixture<InactiveUsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactiveUsesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveUsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
