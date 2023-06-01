import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Observable, map, startWith } from 'rxjs';
import { AcopioListComponent } from 'src/app/acopio/acopio-list/acopio-list.component';

export interface DatosProducto {
  producto: string;
  codigo: string;
}

const dataproducto: DatosProducto[] = [
  {codigo: 'RFF', producto: 'RACIMO DE FRUTA FRESCA DE P.A'},
  {codigo: 'FS', producto: 'FRUTO SUELTO DE P.A'},
];

export interface DatosTicket {
  ticket: number;
  cantidad: number;
  undmedida: string;
  descripcion: string;
  preciou: number;
  igv: number;
  descuento: number;
  importe:number;
}

const dataticket: DatosTicket[] = [
  {ticket:1, cantidad: 12, undmedida:'KILOS', descripcion:'Se ordenaron muchos kilos', preciou: 12, igv: 0, descuento: 0, importe: 12},
  {ticket:2, cantidad: 12, undmedida:'KILOS', descripcion:'Se ordenaron muchos kilos', preciou: 12, igv: 0, descuento: 0, importe: 12},
  {ticket:3, cantidad: 12, undmedida:'KILOS', descripcion:'Se ordenaron muchos kilos', preciou: 12, igv: 0, descuento: 0, importe: 12},
  {ticket:4, cantidad: 12, undmedida:'KILOS', descripcion:'Se ordenaron muchos kilos', preciou: 12, igv: 0, descuento: 0, importe: 12},
];


@Component({
  selector: 'app-acopio-creation-dialog',
  templateUrl: './acopio-creation-dialog.component.html',
  styleUrls: ['./acopio-creation-dialog.component.css'],
})
export class AcopioCreationDialogComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'producto'];  
  displayedColumns2: string[] = ['ticket', 'cantidad', 'undmedida', 'descripcion', 'preciou', 'igv', 'descuento', 'importe'];  
  dataSource = new MatTableDataSource(dataproducto);
  dataSource2 = new MatTableDataSource(dataticket);
  list:FormGroup;
  selectedOption: any;
  selectedOption2: any;
  selectedOption3: any;
  selectedOption4: any;
  options: string[] = ['1', '2', '3'];
  options2: string[] = ['3','4','5'];
  filteredOptions!: Observable<string[]>;
  filteredOptions2!: Observable<string[]>;

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

    this.filteredOptions = this.list.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.filteredOptions2 = this.list.valueChanges.pipe(
      startWith(''),
      map(value => this._filter2(value || '')),
    );
}

ngOnInit() {

}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();
  return this.options.filter(option => option.toLowerCase().includes(filterValue));
}

private _filter2(value: string): string[] {
  const filterValue = value.toLowerCase();
  return this.options2.filter(option => option.toLowerCase().includes(filterValue));
}

onOptionSelected(event: any) {
  if (event.option.value === '1') {
    this.selectedOption = 'CENTRO DE ACOPIO LA FLORIDA';
  } else if(event.option.value === '2') {
    this.selectedOption = 'CENTRO DE ACOPIO PALMERAS';
  } else if(event.option.value === '3') {
    this.selectedOption = 'ALMACEN CENTRAL ACOPIO ACEPAT';
  }
}

onOptionSelected2(event: any) {
  if (event.option.value === '3') {
    this.selectedOption2 = '07755215';
    this.selectedOption3 = 'ACOSTA ROBLES NICOLAS TOLENTINO';
    this.selectedOption4 = '123456789';
  } else {
    this.selectedOption2 = '';
    this.selectedOption3 = '';
    this.selectedOption4 = '';
  }
}

}
