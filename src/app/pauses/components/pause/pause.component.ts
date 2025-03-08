import { Component, input } from '@angular/core';
import { Pause } from '../../interfaces/pause.interface';

@Component({
  selector: 'app-pause',
  imports: [],
  templateUrl: './pause.component.html',
  styleUrl: './pause.component.scss'
})
export class PauseComponent {
  public pause = input.required<Pause>();
}
