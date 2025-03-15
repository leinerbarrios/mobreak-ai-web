import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from '../shared/toolbar/toolbar.component';


@Component({
  selector: 'app-layout',
  imports: [RouterModule, ToolbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent { }
