import { Component, ViewChild } from '@angular/core';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import { BannerComponent } from '../shared/banner/banner.component';
import { reports } from './data/reports';
import { PauseReport } from './interfaces/pause-report.interface';

@Component({
  selector: 'app-reports',
  imports: [
    BannerComponent,
    MatTableModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
  ],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
})
export class ReportsComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public displayedColumns: string[] = [
    'pauseType',
    'duration',
    'dateOfRealization',
    'timeOfRealization',
    'state',
  ];
  public dataSource = new MatTableDataSource<PauseReport>(reports);
  public selectedChip: string = 'Semana actual';

  public selectChip(chip: string): void {
    this.selectedChip = chip;
  }

  public ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
