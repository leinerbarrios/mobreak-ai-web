import { Routes } from '@angular/router';

import { PausesComponent } from './pauses/pauses.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: 'pauses', component: PausesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '/pauses' },
];
