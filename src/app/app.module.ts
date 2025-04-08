import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { PortalComponent } from './pages/portal/portal.component';
import { routes } from './app.routes';

import { Router } from '@angular/router';

import { Component } from '@angular/core';

@Component({
  selector: 'app-local-preview',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class LocalPreviewComponent {
  uploads: any[] = [
    { id: 1, name: 'File 1', type: 'image' },
    { id: 2, name: 'File 2', type: 'video' }
  ];
  placeholders: any[] = [];

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

  onView(item: any): void {
    console.log('View item:', item);
  }

  onDownload(item: any): void {
    console.log('Download item:', item);
  }
}

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot([])
  ],
  providers: []
})
export class AppModule { }