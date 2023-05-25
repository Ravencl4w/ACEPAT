import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Partner } from 'src/app/Interfaces/Partner';
import { PartnerService } from 'src/app/services/partner.service';
import { PartnerCreationDialogComponent } from 'src/app/shared/partner-creation-dialog/partner-creation-dialog.component';
import { PartnerEditionDialogComponent } from 'src/app/shared/partner-edition-dialog/partner-edition-dialog.component';
import * as XLSX from 'xlsx';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { DeleteDialogComponent } from 'src/app/shared/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-creacion-usuarios',
  templateUrl: './creacion-usuarios.component.html',
  styleUrls: ['./creacion-usuarios.component.css'],
  animations: [
    trigger('hoverAnimation', [
      state('initial', style({})),
      state('hovered', style({ background: 'lightgray' })),
      transition('initial => hovered', animate('225ms ease')),
      transition('hovered => initial', animate('225ms ease')),
    ]),
  ],
})

export class CreacionUsuariosComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'fecha',
    'codigo',
    'dni',
    'socio',
    'central',
    'local',
    'direccion',
    'estados',
    'fundos',
    'delete',
  ];
  dataSource = new MatTableDataSource<Partner>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private service: PartnerService, private dialog: MatDialog) {}
  ngAfterViewInit() {
    this.getPartners();
  }

  getPartners(): void {
    this.service.getPartners().subscribe((partners) => {
      this.dataSource = new MatTableDataSource<Partner>(partners);
      this.dataSource.paginator = this.paginator;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
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

  openDialog(): void {
    const dialogRef = this.dialog.open(PartnerCreationDialogComponent, {
      width: '1400px',
    });
  }
  openDialog2(element: any): void {
    const dialogRef = this.dialog.open(PartnerEditionDialogComponent, {
      width: '1400px',
      height:'800px'
    });
  }
  
  deleteRow(element: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Si el resultado es verdadero (presionó "Sí"), elimina la columna
        this.deleteColumn(element);
      }
  });
}

deleteColumn(element: any): void {
  // Obtiene el índice del elemento en la fuente de datos
  const index = this.dataSource.data.indexOf(element);

  if (index >= 0) {
    // Crea una copia del arreglo de datos
    const data = this.dataSource.data.slice();

    // Elimina el elemento del arreglo
    data.splice(index, 1);

    // Asigna la nueva fuente de datos al MatTableDataSource
    this.dataSource = new MatTableDataSource(data);
  }
}
}
