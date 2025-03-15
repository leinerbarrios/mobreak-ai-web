import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-toolbar',
  imports: [RouterModule, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  public menu = [
    { title: 'Configuración', icon: 'settings', path: '/settings' },
    { title: 'Listado de pausas activas', icon: 'today', path: '/pauses' },
    { title: 'Tipos de ejercicios', icon: 'list', path: '/exercises' },
    { title: 'Informe', icon: 'folder', path: '/reports' },
    { title: 'Perfil', icon: 'account_circle', path: '/profile' },
    { title: 'Salir', icon: 'directions_walk', path: '/login' },
  ];
}
