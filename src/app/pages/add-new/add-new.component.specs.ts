import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddNewComponent } from './add-new.component';

describe('AddNewComponent', () => {
  let component: AddNewComponent;
  let fixture: ComponentFixture<AddNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to upload container on button click', () => {
    const routerSpy = spyOn(component['router'], 'navigate');
    component.navigateToUploadContainer();
    expect(routerSpy).toHaveBeenCalledWith(['/upload-container']);
  });
});