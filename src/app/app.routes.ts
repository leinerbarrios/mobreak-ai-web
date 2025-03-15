import { Routes } from '@angular/router';

import { PausesComponent } from './pauses/pauses.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportsComponent } from './reports/reports.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  { title: 'MoBreak - Inicio de sesión', path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { title: 'MoBreak - Pausas activas', path: 'pauses', component: PausesComponent },
      { title: 'MoBreak - Informe', path: 'reports', component: ReportsComponent },
      { title: 'MoBreak - Perfil', path: 'profile', component: ProfileComponent },
      { title: 'MoBreak - Ejercicios', path: 'exercises', component: ExercisesComponent },
      { title: 'MoBreak - Configuración', path: 'settings', component: SettingsComponent },
      { path: '**', redirectTo: '/pauses', title: 'pauses' },
    ],
  },
  { path: '**', redirectTo: '' },
];
