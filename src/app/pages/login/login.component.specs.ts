import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values for properties', () => {
    expect(component.sapId).toBe('');
    expect(component.password).toBe('');
    expect(component.showPassword).toBe(false);
  });

  it('should toggle password visibility', () => {
    expect(component.showPassword).toBe(false);
    component.togglePasswordVisibility();
    expect(component.showPassword).toBe(true);
    component.togglePasswordVisibility();
    expect(component.showPassword).toBe(false);
  });

  it('should log form submission', () => {
    spyOn(console, 'log');
    component.sapId = '12345';
    component.password = 'password';
    component.onSubmit();
    expect(console.log).toHaveBeenCalledWith('Form submitted!');
    expect(console.log).toHaveBeenCalledWith('SAP ID:', '12345');
    expect(console.log).toHaveBeenCalledWith('Password:', 'password');
  });
});