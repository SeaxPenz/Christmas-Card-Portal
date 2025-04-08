import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-upload',
  templateUrl: './cancel-upload.component.html',
  styleUrls: ['./cancel-upload.component.css']
})
export class CancelUploadComponent {
  constructor(private router: Router) {}

  onCancel(): void {
    this.router.navigate(['/portal']);
    console.log('Upload canceled');
  }

  onBack(): void {
    this.router.navigate(['/preview']);
  }
}