import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { MatPaginator } from '@angular/material/paginator';
import { CentroAcopioDialogComponent } from 'src/app/shared/centro-acopio-dialog/centro-acopio-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AsignacionCostosDialogComponent } from 'src/app/shared/asignacion-costos-dialog/asignacion-costos-dialog.component';
import { AsignarPrecioVentaComponent } from 'src/app/shared/asignar-precio-venta/asignar-precio-venta.component';


export interface PeriodicElement2 {
  codigos: string;
}
export interface PeriodicElement {
  codigo: number;
  cSunat: number;
  producto: string;
  familia: string;
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
  { codigo: 1, cSunat: 111111 ,producto: 'Agua', familia: 'peluche'}
];

@Component({
  selector: 'app-produccion',
  templateUrl: './produccion.component.html',
  styleUrls: ['./produccion.component.css']
})
export class ProduccionComponent implements AfterViewInit{
  displayedColumns: string[] = [
    'codigo',
    'cSunat',
    'producto',
    'familia',
   
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

  openCreationDialog(): void {
    this.dialog.open(AsignacionCostosDialogComponent, {
      width: '1400px',
    });
  }
  openCreationDialog2(): void {
    this.dialog.open(AsignarPrecioVentaComponent, {
      width: '1400px',
    });
  }
  }
