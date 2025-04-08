import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // {
  //   path: 'home',
  //   loadComponent: () =>
  //     import('./pages/home-two/home-two.component').then((m) => m.HomeTwoComponent)
  // },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent)
  },
  {
    path: 'portal',
    loadComponent: () =>
      import('./pages/portal/portal.component').then((m) => m.PortalComponent)
  },
  {
    path: 'preview',
    loadComponent: () =>
      import('./pages/preview/preview.component').then((m) => m.PreviewComponent)
  },
  {
    path: 'upload-container',
    loadComponent: () =>
      import('./pages/upload-container/upload-container.component').then(
        (m) => m.UploadContainerComponent
      )
  },
  {
    path: 'success-container',
    loadComponent: () =>
      import('./pages/upload-success/upload-success.component').then((m) => m.UploadSuccessComponent)
  },
  {
    path: 'cancel-uploads',
    loadComponent: () =>
      import('./pages/cancel-uploads/cancel-upload.component').then(
        (m) => m.CancelUploadComponent
      )
  }
];