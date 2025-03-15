import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BannerComponent } from '../shared/banner/banner.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-settings',
  imports: [
    BannerComponent,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {
  private readonly _snackBar = inject(MatSnackBar);

  public openSnackBar() {
    this._snackBar.open('Configuración guardada con éxito', '', { duration: 5000 });
  }
}
