import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-success.component.html',
  styleUrls: ['./upload-success.component.css']
})
export class UploadSuccessComponent {
  constructor(private router: Router) {}

  onDoneClick(): void {
    this.router.navigate(['/portal']);
  }
}