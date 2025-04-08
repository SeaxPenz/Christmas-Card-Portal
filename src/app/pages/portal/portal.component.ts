import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent {
  showTypes = false;

  uploadItems = Array(10).fill({ year: 2024, uploadedBy: 'AA234567' });
  
  constructor(private router: Router) {}

  showUploadTypes(): void {
    this.showTypes = true;
  }

  navigateToUploadContainer(type: string): void {
    this.showTypes = false;
    console.log(`Navigating to upload container for type: ${type}`);
    // Use Angular Router instead of window.location
    this.router.navigate(['/upload-container'], { queryParams: { type } });
  }

  onView(item: any): void {
    console.log('Navigating to preview page for item:', item);
    // Use Angular Router
    this.router.navigate(['/preview']);
  }

  onDownload(item: any): void {
    const link = document.createElement('a');
    link.href = 'assets/images/happy.png';
    link.download = 'happy.png';
    link.click();
    console.log('Downloading happy.png for item:', item);
  }

  closeUploadTypes(): void {
    this.showTypes = false;
  }
}