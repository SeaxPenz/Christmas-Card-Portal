import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CancelUploadComponent } from './cancel-upload.component';

describe('CancelUploadComponent', () => {
  let component: CancelUploadComponent;
  let fixture: ComponentFixture<CancelUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CancelUploadComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});