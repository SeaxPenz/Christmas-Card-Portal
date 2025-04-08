import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-container',
  templateUrl: './upload-container.component.html',
  styleUrls: ['./upload-container.component.css']
})
export class UploadContainerComponent {
  from: string = '';
  to: string = '';
  message: string = '';

  next() {}

  goBack() {}
}