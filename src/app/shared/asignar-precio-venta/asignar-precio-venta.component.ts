import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement2 {
  codigos: string;
}
export interface PeriodicElement {
  uMedida: string;
  valor: string;
  priof: number;
  preciouno: number;
  preciodos: number;
  preciotres: number;
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
  { uMedida: 'Metros', valor: 'Hydrogen', priof: 1.0079, preciouno: 20, preciodos: 1000, preciotres:200 },
];
@Component({
  selector: 'app-asignar-precio-venta',
  templateUrl: './asignar-precio-venta.component.html',
  styleUrls: ['./asignar-precio-venta.component.css']
})
export class AsignarPrecioVentaComponent {
  displayedColumns: string[] = [
    'uMedida',
    'valor',
    'priof',
    'preciouno',
    'preciodos',
    'preciotres',
   
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
