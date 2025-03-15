import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { Exercise } from '../../interfaces/exercise.interface';


@Component({
  selector: 'app-exercise',
  imports: [FormsModule, MatSlideToggleModule],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseComponent {
  public exercise = input.required<Exercise>();
}
