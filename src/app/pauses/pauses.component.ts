import { Component } from '@angular/core';

import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

import { BannerComponent } from '../shared/banner/banner.component';
import { PauseComponent } from './components/pause/pause.component';
import { Pause } from './interfaces/pause.interface';

@Component({
  selector: 'app-pauses',
  imports: [BannerComponent, PauseComponent, MatPaginatorModule],
  templateUrl: './pauses.component.html',
  styleUrl: './pauses.component.scss',
})
export class PausesComponent {
  public pageSize = 3;
  public currentPage = 0;
  public paginatedPauses: Pause[] = [];

  public pauses: Pause[] = [
    {
      image: 'pauses/legs.png',
      title: 'Estiramiento de piernas',
      description:
        'Este ejercicio se enfoca en las piernas, realizando una serie de movimientos que ayudan a fortalecer la fuerza y la resistencia.',
      date: 'Realizado hoy',
    },
    {
      image: 'pauses/hips.png',
      title: 'Ejercicio de caderas',
      description:
        'En este ejercicio se realizan movimientos de caderas circulares, para mejorar la postura y la estabilidad.',
      date: 'Realizado ayer',
    },
    {
      image: 'pauses/eyes.png',
      title: 'Ejercicio para los ojos',
      description:
        'Este ejercicio se centra en los ojos, realizando movimientos de mirada y expresión para mejorar la atención y la percepción.',
      date: 'Realizado hace 3 días',
    },
  ];

  constructor() {
    this.updatePaginatedPauses();
  }

  public updatePaginatedPauses(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedPauses = this.pauses.slice(startIndex, endIndex);
  }

  public onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedPauses();
  }
}
