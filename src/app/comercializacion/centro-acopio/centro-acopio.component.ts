import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AcopioCreationDialogComponent } from 'src/app/shared/acopio-creation-dialog/acopio-creation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CentroAcopioDialogComponent } from 'src/app/shared/centro-acopio-dialog/centro-acopio-dialog.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-centro-acopio',
  templateUrl: './centro-acopio.component.html',
  styleUrls: ['./centro-acopio.component.css']
})
export class CentroAcopioComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'codigo',
    'cAcopio',
    'sectorLocal',
    'sectorCentral',
    'responsable',
    'acopiador',
    'estado'
  ];

  dataSource = new MatTableDataSource<PeriodicElement>();
  constructor(private dialog: MatDialog) {}

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.data = ELEMENT_DATA;
    this.dataSource.paginator = this.paginator;
    
    
  }

  openCreationDialog(): void {
    this.dialog.open(CentroAcopioDialogComponent, {
      width: '1400px',
    });
  }
}
