import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserManagementService } from 'src/app/services/user-management.service';
import { AcopioDialogComponent } from 'src/app/shared/acopio-dialog/acopio-dialog.component';
import { UserCreationDialogComponent } from 'src/app/shared/user-creation-dialog/user-creation-dialog.component';
import * as XLSX from 'xlsx';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { FormControl, FormGroup } from '@angular/forms';
import { Acopio } from 'src/app/Interfaces/Acopio';
import { AcopioService } from 'src/app/services/acopio.service';

@Component({
  selector: 'app-acopio-de-racimos',
  templateUrl: './acopio-de-racimos.component.html',
  styleUrls: ['./acopio-de-racimos.component.css'],
})
export class AcopioDeRacimosComponent implements AfterViewInit {
  displayedColumns: string[] = ['codigo', 'produccion', 'cantidad', 'importe'];
  dataSource = new MatTableDataSource<Acopio>;

  fechaDesdeControl: FormControl = new FormControl();
  fechaDesde: Date = new Date();
  fechaHasta = new Date();
  radioSelected: boolean = false;

  options = [
    { value: 1, label: 'Centro de acopio Florida' },
    { value: 2, label: 'Centro de acopio 2' },
    { value: 3, label: 'Centro de acopio 3' },
  ];

  selectedOption: number | undefined;

  constructor(private dialog: MatDialog, private service: AcopioService) {}
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.activarPicker();
    this.dataSource = new MatTableDataSource();
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

  openDialog(): void {
    const dialogRef = this.dialog.open(AcopioDialogComponent, {
      width: '500px',
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Elimina los espacios en blanco
    filterValue = filterValue.toLowerCase(); // Convierte el texto a minúsculas
    this.dataSource.filter = filterValue;
  }
  verReportes(): void {
    if (this.fechaDesde && this.fechaHasta) {
    this.service.getAcopios(this.fechaDesde, this.fechaHasta)
      .subscribe(acopios => {
        this.dataSource = new MatTableDataSource<Acopio>(acopios);
        this.dataSource.paginator = this.paginator;
      });
    }
    else{
      console.log("error")
    }
  }
  activarPicker(): void {
    this.fechaDesde = new Date(2023,5,18);
    this.radioSelected = !this.radioSelected;
    
  }
  consoleLog(): void {
    console.log(this.radioSelected);
  }
}

