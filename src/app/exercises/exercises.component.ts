import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

import { BannerComponent } from '../shared/banner/banner.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { Exercise } from './interfaces/exercise.interface';

@Component({
  selector: 'app-exercises',
  imports: [BannerComponent, ExerciseComponent, MatPaginatorModule],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercisesComponent {
  public paginatedExercises: Exercise[] = [];
  public pageSize = 3;
  public currentPage = 0;

  public exercises: Exercise[] = [
    {
      state: true,
      title: 'Estiramiento de piernas',
      description:
        'Este ejercicio se enfoca en las piernas, realizando una serie de movimientos que ayudan a fortalecer la fuerza y la resistencia.',
    },
    {
      state: false,
      title: 'Ejercicio de caderas',
      description:
        'En este ejercicio se realizan movimientos de caderas circulares, para mejorar la postura y la estabilidad.',
    },
    {
      state: true,
      title: 'Ejercicio para los ojos',
      description:
        'Este ejercicio se centra en los ojos, realizando movimientos de mirada y expresión para mejorar la atención y la percepción.',
    },
  ];

  constructor() {
    this.updatePaginatedPauses();
  }

  public onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedPauses();
  }

  public updatePaginatedPauses(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedExercises = this.exercises.slice(startIndex, endIndex);
  }
}
