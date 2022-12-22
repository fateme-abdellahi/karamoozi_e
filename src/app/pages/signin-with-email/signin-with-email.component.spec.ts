import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninWithEmailComponent } from './signin-with-email.component';

describe('SigninWithEmailComponent', () => {
  let component: SigninWithEmailComponent;
  let fixture: ComponentFixture<SigninWithEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninWithEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninWithEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
