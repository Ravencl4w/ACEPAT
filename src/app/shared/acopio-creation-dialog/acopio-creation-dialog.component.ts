import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import { Observable, map, startWith } from 'rxjs';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { PartnerService } from 'src/app/services/partner.service';
import { GatheringService } from 'src/app/services/gathering.service';
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
  animations: [
    trigger('hoverAnimation', [
      state('initial', style({})),
      state('hovered', style({ background: 'lightgray' })),
      transition('initial => hovered', animate('225ms ease')),
      transition('hovered => initial', animate('225ms ease')),
    ]),
  ],
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
  selectedOption5: any;
  selectedCompra: any;
  selectedVenta: any;
  filteredOptions!: Observable<string[]>;
  filteredOptions2!: Observable<string[]>;
  filteredOptions3!: Observable<string[]>;
  selectedOption6: any;
  selectedOption7: any;
  selectedOption8: any;
  selectedOption9: any;
  selectedOption10: any;
  selectedOption11: any;
  selectedOption12: any;
  selectedOption13: any;
  selectedOption14: any;
  selectedOption15: any;
  selectedOption16: any;
  selectedOption17: any;


  constructor(private fb: FormBuilder, private service: PartnerService, private gatService: GatheringService) {
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
      fechacomprobante: [new Date().toISOString(), Validators.required],
      formapago: ['', Validators.required],
      moneda: ['', Validators.required],
      fecharegistro: [new Date().toISOString(), Validators.required],
      compra: [3.676, Validators.required],
      venta: [3.684, Validators.required],
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

ngOnInit() {
  this.loadOptions();
}

loadOptions() {
  // Realiza la solicitud HTTP para obtener los datos del endpoint

  this.gatService.getTransportistas().subscribe(data => {
    // Mapea los datos de respuesta al formato de opciones que necesitas (id y value)
    const options3 = data.map(item => item.transporte);
    
    // Configura la lógica de filtrado y asigna las opciones filtradas a la variable
    this.filteredOptions3 = this.list.valueChanges.pipe(
      startWith(''),
      map(value => this.filterOptions(value, options3))
    );
  });

  this.gatService.getCenters().subscribe(data => {
    // Mapea los datos de respuesta al formato de opciones que necesitas (id y value)
    const options = data.map(item => item.id);
    
    // Configura la lógica de filtrado y asigna las opciones filtradas a la variable
    this.filteredOptions = this.list.valueChanges.pipe(
      startWith(''),
      map(value => this.filterOptions(value, options))
    );
  });

  this.service.getPartners().subscribe(data => {
    // Mapea los datos de respuesta al formato de opciones que necesitas (id y value)
    const options2 = data.map(item => item.id);
    
    // Configura la lógica de filtrado y asigna las opciones filtradas a la variable
    this.filteredOptions2 = this.list.valueChanges.pipe(
      startWith(''),
      map(value => this.filterOptions(value, options2))
    );
  });
}

filterOptions(value: string, options: string[]): string[] {
  // Filtra las opciones basadas en el valor de entrada
  const filterValue = value.toLowerCase();
  return options.filter(option => option.toLowerCase().includes(filterValue));
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

onOptionSelected(event: any) {

  this.gatService.getCentersById(event.option.value).subscribe(data => {
    this.selectedOption = data.centro;
  });
}

onOptionSelected2(event: any) {
  this.service.getPartnersById(event.option.value).subscribe(data => {
    this.selectedOption2 = data.dni;
    this.selectedOption3 = data.nombre;
    this.selectedOption4 = data.nrocuenta;
    this.selectedOption5 = data.localidad;
  });
  
}

getData(id: string){
  if(id === 'RFF'){
    this.selectedOption6 = '164.00';
    this.selectedOption7 = '603.028';
    this.selectedOption8 = '164';
    this.selectedOption9 = '0.000';
    this.selectedOption10 = '0.000';
    this.selectedOption11 = '603.028';
    this.selectedOption12 = '0.000';
    this.selectedOption13 = '0.000';
  }
  else{

  }
}

}
