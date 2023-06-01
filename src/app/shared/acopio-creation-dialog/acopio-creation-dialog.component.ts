import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
];


@Component({
  selector: 'app-acopio-creation-dialog',
  templateUrl: './acopio-creation-dialog.component.html',
  styleUrls: ['./acopio-creation-dialog.component.css'],
})
export class AcopioCreationDialogComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];  
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  list:FormGroup;

  constructor(private fb: FormBuilder) {
    this.list = this.fb.group({
      codigoacopio: ['', Validators.required],
      centroacopio: ['', Validators.required],
      codigosocio: ['', Validators.required],
      numerodoc: ['', Validators.required],
      nombres: ['', Validators.required],
      direccion: ['', Validators.required],
      cuentaban: ['', Validators.required],
      cuentacte: ['', Validators.required],
      transaccion: ['', Validators.required],
      sectorcentral: ['', Validators.required],
      sectorlocal: ['', Validators.required],
      ruc: ['', Validators.required],
      transportista: ['', Validators.required],
      fechacomprobante: ['', Validators.required],
      formapago: ['', Validators.required],
      moneda: ['', Validators.required],
      fecharegistro: ['', Validators.required],
      compra: ['', Validators.required],
      venta: ['', Validators.required],
      flete: ['', Validators.required],
      comprobante: ['', Validators.required],
      serie: ['', Validators.required],
      correlativo: ['', Validators.required],
      ticket: ['', Validators.required],
      cantidad: ['', Validators.required],
      preciodolarr: ['', Validators.required],
      preciosolesr: ['', Validators.required],
      unidadm: ['', Validators.required],
      preciodolar: ['', Validators.required],
      igvdolar: ['', Validators.required],
      descuentodolar: ['', Validators.required],
      importadolar: ['', Validators.required],
      preciosoles: ['', Validators.required],
      igvsoles: ['', Validators.required],
      descuentosoles: ['', Validators.required],
      importesoles: ['', Validators.required],
    });
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
}
