import { Routes } from '@angular/router';
import { Songs } from './pages/songs/songs';
import { Browser } from './pages/browser/browser';

export const routes: Routes = [
  {
    path: 'songs',
    component: Songs
  },
  {
    path: 'browser',
    component: Browser
  },
  {
    path: '',
    redirectTo: 'songs',
    pathMatch: 'full'
  }
];
