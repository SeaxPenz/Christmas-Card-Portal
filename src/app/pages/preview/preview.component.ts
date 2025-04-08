import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {
  uploads: any[] = [
    { id: 1, name: 'File 1', type: 'image' },
    { id: 2, name: 'File 2', type: 'video' }
  ];
  placeholders: any[] = [];

  fontOptions = [
    { value: 'Arial', label: 'Arial' },
    { value: 'Times New Roman', label: 'Times New Roman' },
    { value: 'Verdana', label: 'Verdana' },
    { value: 'Georgia', label: 'Georgia' },
    { value: 'Courier New', label: 'Courier New' },
    { value: 'Tahoma', label: 'Tahoma' },
    { value: 'Trebuchet MS', label: 'Trebuchet MS' },
    { value: 'Comic Sans MS', label: 'Comic Sans MS' }
  ];

  colorOptions = [
    { value: '#000000', label: 'Black' },
    { value: '#FF0000', label: 'Red' },
    { value: '#0000FF', label: 'Blue' },
    { value: '#008000', label: 'Green' },
    { value: '#FFFF00', label: 'Yellow' },
    { value: '#FFA500', label: 'Orange' },
    { value: '#800080', label: 'Purple' }
  ];

  selectedColorName: string = '#000000';
  selectedAlignment: string = 'left'; // Default alignment

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updatePlaceholders();
  }

  updatePlaceholders(): void {
    const remainingRows = 10 - this.uploads.length;
    this.placeholders = remainingRows > 0 ? Array(remainingRows).fill(null) : [];
  }

  onBackClick(): void {
    this.router.navigate(['/portal']);
  }

  onDoneClick(): void {
    this.router.navigate(['/success-container']);
  }

  onSendClick(): void {
    this.router.navigate(['/success-container']);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      console.log('File selected:', file);
    }
  }

  updateColorName(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input && input.value) {
      this.selectedColorName = input.value; 
    }
  }

  updateColorFromCode(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input && input.value) {
      this.selectedColorName = input.value;
      const colorPicker = document.getElementById('colorPicker') as HTMLInputElement;
      if (colorPicker) {
        colorPicker.value = input.value;
      }
    }
  }

  updateAlignment(alignment: string): void {
    this.selectedAlignment = alignment; // Update the selected alignment
    console.log('Selected alignment:', alignment);
  }
}