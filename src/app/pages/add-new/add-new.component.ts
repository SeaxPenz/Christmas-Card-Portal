import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent {
  constructor(private router: Router) {}

  navigateToUploadContainer(): void {
    this.router.navigate(['/upload-container']);
  }
}