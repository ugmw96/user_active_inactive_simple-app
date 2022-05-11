import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistedUsersComponent } from './registed-users.component';

describe('RegistedUsersComponent', () => {
  let component: RegistedUsersComponent;
  let fixture: ComponentFixture<RegistedUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistedUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
