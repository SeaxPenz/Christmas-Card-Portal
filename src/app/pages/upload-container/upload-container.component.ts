import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-container',
  templateUrl: './upload-container.component.html',
  styleUrls: ['./upload-container.component.css']
})
export class UploadContainerComponent {
  constructor(private router: Router) {}

  navigateToPortal(): void {
    this.router.navigate(['/portal']);
    console.log('Navigating to portal...');
  }

  navigateToPreview(): void {
    this.router.navigate(['/preview']);
    console.log('Navigating to preview...');
  }

  navigateToUploadSuccess(): void {
    this.router.navigate(['/success-container']);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      console.log('File selected:', file);
    }
  }
}