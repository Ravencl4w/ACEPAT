import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Partner } from 'src/app/Interfaces/Partner';
import { PartnerService } from 'src/app/services/partner.service';
import { PartnerCreationDialogComponent } from 'src/app/shared/partner-creation-dialog/partner-creation-dialog.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-creacion-usuarios',
  templateUrl: './creacion-usuarios.component.html',
  styleUrls: ['./creacion-usuarios.component.css']
})
export class CreacionUsuariosComponent implements AfterViewInit {
  displayedColumns: string[] = ['fecha', 'codigo', 'dni', 'socio', 'central' , 'local', 'direccion', 'estados','fundos'] ;
  dataSource = new MatTableDataSource<Partner>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private service: PartnerService, private dialog: MatDialog) {}
  ngAfterViewInit() {
    this.getPartners();
  }

  getPartners(): void {
    this.service.getPartners()
      .subscribe(partners => {
        this.dataSource = new MatTableDataSource<Partner>(partners);
        this.dataSource.paginator = this.paginator;

      });
}

exportToExcel(): void {
  const data = this.dataSource.data;
  const paginatedData = data.slice(this.paginator.pageIndex * this.paginator.pageSize, (this.paginator.pageIndex + 1) * this.paginator.pageSize);

  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(paginatedData);
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');

  XLSX.writeFile(workbook, 'datos.xlsx');
}

openDialog(): void {
  const dialogRef = this.dialog.open(PartnerCreationDialogComponent, {
    width: '900px'
  });
}

}