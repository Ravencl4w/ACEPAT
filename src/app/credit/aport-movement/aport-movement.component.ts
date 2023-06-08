import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CollectContributionsComponent } from 'src/app/shared/collect-contributions/collect-contributions.component';
import { ReportingMovementComponent } from 'src/app/shared/reporting-movement/reporting-movement.component';
import * as XLSX from 'xlsx';



export interface MovimientoAportes {
  documento: string;
  fecha: Date;
  importe: number;
  codigo: string;
  docident: number;
  socio: string;
  estado: string;
  usuario: string; 
}

const ELEMENT_DATA: MovimientoAportes[] = [
  {
    documento: 'RAEB-20230000036',
    fecha: new Date('2018-03-16'),
    importe: 100.50,
    codigo: 'ABC123',
    docident: 123456789,
    socio: 'Juan Perez',
    estado: 'A',
    usuario: 'jdoe'
  },
  {
    documento: 'RAEB-20230000037',
    fecha: new Date('2022-09-21'),
    importe: 75.20,
    codigo: 'DEF456',
    docident: 987654321,
    socio: 'Maria Rodriguez',
    estado: 'I',
    usuario: 'mrodriguez'
  },
];

@Component({
  selector: 'app-aport-movement',
  templateUrl: './aport-movement.component.html',
  styleUrls: ['./aport-movement.component.css']
})

export class AportMovementComponent implements AfterViewInit{
  
  displayedColumns: string[] = ['documento', 'fecha', 'importe', 'codigo', 'docident', 'socio', 'estado', 'usuario'];
  dataSource = new MatTableDataSource<MovimientoAportes>();
  aportes: FormGroup;
  fechaDesde = new Date();
  fechaHasta = new Date();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    //INICIOFORMULARIO
    this.aportes = this.fb.group({
    });
    //FIN FORMULARIO
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<MovimientoAportes>(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }

  exportToExcel(): void {
    const data = this.dataSource.data;
    const paginatedData = data.slice(
      this.paginator.pageIndex * this.paginator.pageSize,
      (this.paginator.pageIndex + 1) * this.paginator.pageSize
    );

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(paginatedData);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');

    XLSX.writeFile(workbook, 'datos.xlsx');
  }

  applyBusqueda(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openEditionDialog(): void {
    this.dialog.open(CollectContributionsComponent, {
    });
  }

  openCreationDialog(): void {
    this.dialog.open(ReportingMovementComponent, {
    });
  }

  /*
  openEditionDialog(element: Partner): void {
    this.selectedElement = element;
    const dialogRef = this.dialog.open(PartnerEditionDialogComponent, {
      data: this.selectedElement
    });
    dialogRef.afterClosed().subscribe(result => {
      // Aquí puedes llamar al método que deseas cuando se cierra el diálogo
      this.getPartners();
    });
  }
  */

}