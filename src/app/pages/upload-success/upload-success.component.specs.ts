import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadSuccessComponent } from './upload-success.component';

describe('UploadSuccessComponent', () => {
  let component: UploadSuccessComponent;
  let fixture: ComponentFixture<UploadSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadSuccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display success message', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.success-message')?.textContent).toContain('Upload Successful!');
  });
});