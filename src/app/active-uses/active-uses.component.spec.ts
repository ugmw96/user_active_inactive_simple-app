import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveUsesComponent } from './active-uses.component';

describe('ActiveUsesComponent', () => {
  let component: ActiveUsesComponent;
  let fixture: ComponentFixture<ActiveUsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveUsesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveUsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
