import { Routes } from '@angular/router';

import { PausesComponent } from './pauses/pauses.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportsComponent } from './reports/reports.component';

export const routes: Routes = [
  { path: 'pauses', component: PausesComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '/pauses' },
];
