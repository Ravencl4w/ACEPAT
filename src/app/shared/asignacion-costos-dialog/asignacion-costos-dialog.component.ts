import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement2 {
  codigos: string;
}
export interface PeriodicElement {
  uMedida: number;
  valUM: string;
  prk: number;
  moneda: string;
  costo: number;
}
const ELEMENT_DATA2: PeriodicElement2[] = [
  {codigos: 'Palma Aceitera' },
  {codigos: 'Palma Aceitera 2' },
  {codigos: 'Palma Aceitera 3' },
  {codigos: 'Palma Aceitera 4' },
  {codigos: 'Palma Aceitera 5' },
  {codigos: 'Palma Aceitera  6' },
  {codigos: 'Palma Aceitera 7' }
];
const ELEMENT_DATA: PeriodicElement[] = [
  { uMedida: 1, valUM: 'Hydrogen', prk: 1.0079, moneda: 'H', costo: 1000 },
];
@Component({
  selector: 'app-asignacion-costos-dialog',
  templateUrl: './asignacion-costos-dialog.component.html',
  styleUrls: ['./asignacion-costos-dialog.component.css']
})
export class AsignacionCostosDialogComponent {
  displayedColumns: string[] = [
    'uMedida',
    'valUM',
    'prk',
    'moneda',
    'costo',
   
  ];
  displayedColumns2: string[] = [
    'codigos',
    
  ];
  dataSource2 = ELEMENT_DATA2;

  dataSource = new MatTableDataSource<PeriodicElement>();
  constructor(private dialog: MatDialog) {}

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.data = ELEMENT_DATA;
    this.dataSource.paginator = this.paginator;
    
    
  }


  }

