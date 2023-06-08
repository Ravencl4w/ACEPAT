import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
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
import { Ticket } from 'src/app/Interfaces/Ticket';
import { TicketService } from 'src/app/services/ticket.service';
export interface DatosProducto {
  producto: string;
  codigo: string;
}

const dataproducto: DatosProducto[] = [
  { codigo: 'RFF', producto: 'RACIMO DE FRUTA FRESCA DE P.A' },
  { codigo: 'FS', producto: 'FRUTO SUELTO DE P.A' },
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
  inputDisabled = false; //VARIBLE PARA DESAHABILITAR LOS INPUTS
  displayedColumns: string[] = ['codigo', 'producto'];
  displayedColumns2: string[] = ['ticket', 'cantidad', 'undmedida', 'descripcion', 'preciou', 'igv', 'descuento', 'importe'];
  dataSource = new MatTableDataSource(dataproducto);
  dataSource2 = new MatTableDataSource<Ticket>();
  list: FormGroup;
  //OPCIONES FILTRADAS PARA AUTOCOMPLETAR
  filteredOptions!: Observable<string[]>;
  filteredOptions2!: Observable<string[]>;
  filteredOptions3!: Observable<string[]>;
  filteredOptions4!: Observable<string[]>;
  filteredOptions5!: Observable<string[]>;
  filteredOptions6!: Observable<string[]>;
  //FIN DE AUTOCOMPLETAR
  //VARIABLES DE CADA INPUT
  selectedOption: any;
  selectedOption2: any;
  selectedOption3: any;
  selectedOption4: any;
  selectedOption5: any;
  selectedCompra: any;
  selectedVenta: any;
  precioDolarR: any;
  precioSolesR: any;
  cantidadAcopio: any;
  precioDolar: any;
  igvDolar: any;
  importeDolares: any;
  precioSoles: any;
  igvSoles: any;
  importeSoles: any;
  selectedOption14: any;
  selectedOption15: any;
  selectedOption16: any;
  selectedOption17: any;
  //FIN DE VARIABLES
  constructor(private fb: FormBuilder, private service: PartnerService, private gatService: GatheringService, private ticket: TicketService) {
    //INICIOFORMULARIO
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
      formapago: ['CREDITO', Validators.required],
      moneda: ['SOLES', Validators.required],
      fecharegistro: [new Date().toISOString(), Validators.required],
      compra: [3.676, Validators.required],
      venta: [3.684, Validators.required],
      flete: ['', Validators.required],
      comprobante: ['LIQUIDACION DE COMPRA ELECTRONICA', Validators.required],
      serie: ['', Validators.required],
      correlativo: ['', Validators.required],
      ticket: ['', Validators.required],
      cantidad: ['', Validators.required],
      preciodolarr: ['', Validators.required],
      preciosolesr: ['', Validators.required],
      unidadm: ['TN', Validators.required],
      preciodolar: ['', Validators.required],
      igvdolar: ['', Validators.required],
      descuentodolar: ['', Validators.required],
      importadolar: ['', Validators.required],
      preciosoles: ['', Validators.required],
      igvsoles: ['', Validators.required],
      descuentosoles: ['', Validators.required],
      importesoles: ['', Validators.required],
    });
    //FIN FORMULARIO
  }

  ngOnInit() {
    this.loadOptions(); //CARGAR OPCIONES PARA AUTOCOMPLETE
    this.getTickets() //CARGAR TODOS LOS TICKETS
    this.list.controls['cantidad'].valueChanges.subscribe(() => {
      this.updateTicket();
    });
  }

  loadOptions() {
    // Realiza la solicitud HTTP para obtener los datos del endpoint
    this.gatService.getCenters().subscribe(data => {
      // Mapea los datos de respuesta al formato de opciones que necesitas (id y value)
      const options4 = data.map(item => item.centro);

      // Configura la lógica de filtrado y asigna las opciones filtradas a la variable
      this.filteredOptions4 = this.list.controls['centroacopio'].valueChanges.pipe(
        startWith(''),
        map(value => this.filterOptions(value, options4))
      );
    });

    this.gatService.getTransportistas().subscribe(data => {
      // Mapea los datos de respuesta al formato de opciones que necesitas (id y value)
      const options3 = data.map(item => item.transporte);

      // Configura la lógica de filtrado y asigna las opciones filtradas a la variable
      this.filteredOptions3 = this.list.controls['transportista'].valueChanges.pipe(
        startWith(''),
        map(value => this.filterOptions(value, options3))
      );
    });

    this.gatService.getCenters().subscribe(data => {
      // Mapea los datos de respuesta al formato de opciones que necesitas (id y value)
      const options = data.map(item => item.id);

      // Configura la lógica de filtrado y asigna las opciones filtradas a la variable
      this.filteredOptions = this.list.controls['codigoacopio'].valueChanges.pipe(
        startWith(''),
        map(value => this.filterOptions(value, options))
      );
    });

    this.service.getPartners().subscribe(data => {
      // Mapea los datos de respuesta al formato de opciones que necesitas (id y value)
      const options2 = data.map(item => item.id);

      // Configura la lógica de filtrado y asigna las opciones filtradas a la variable
      this.filteredOptions2 = this.list.controls['codigosocio'].valueChanges.pipe(
        startWith(''),
        map(value => this.filterOptions(value, options2))
      );
    });
    this.service.getPartners().subscribe(data => {
      // Mapea los datos de respuesta al formato de opciones que necesitas (id y value)
      const options5 = data.map(item => item.dni);

      // Configura la lógica de filtrado y asigna las opciones filtradas a la variable
      this.filteredOptions5 = this.list.controls['numerodoc'].valueChanges.pipe(
        startWith(''),
        map(value => this.filterOptions(value, options5))
      );
    });
    this.service.getPartners().subscribe(data => {
      // Mapea los datos de respuesta al formato de opciones que necesitas (id y value)
      const options6 = data.map(item => item.nombre);

      // Configura la lógica de filtrado y asigna las opciones filtradas a la variable
      this.filteredOptions6 = this.list.controls['nombres'].valueChanges.pipe(
        startWith(''),
        map(value => this.filterOptions(value, options6))
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
  onOptionSelected3(event: any) {
    this.gatService.getCentersByName(event.option.value).subscribe(data => {
      this.selectedOption15 = data.id;
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

  onOptionSelected4(event: any) {
    this.service.getPartnersByDni(event.option.value).subscribe(data => {
      this.selectedOption17 = data.id;
      this.selectedOption3 = data.nombre;
      this.selectedOption4 = data.nrocuenta;
      this.selectedOption5 = data.localidad;
    });

  }
  onOptionSelected5(event: any) {
    this.service.getPartnersByName(event.option.value).subscribe(data => {
      this.selectedOption17 = data.id;
      this.selectedOption3 = data.nombre;
      this.selectedOption2 = data.dni;
      this.selectedOption4 = data.nrocuenta;
      this.selectedOption5 = data.localidad;
    });

  }
  getTickets(){
    this.ticket.getTickets().subscribe((tikckets) => {
      this.dataSource2 = new MatTableDataSource<Ticket>(tikckets);
    });
  }

  getData(id: string) {
    if (id === 'RFF') {
      const compra = this.list.controls['compra'].value;
      const cantidad = this.list.controls['cantidad'].value;
      this.precioDolarR = 164.0000;
      this.precioDolar = 164.0000;
      this.igvDolar = 0.0000;
      this.igvSoles = 0.0000;
      this.precioSolesR = compra * this.precioDolarR;
      this.precioSoles = compra * this.precioDolarR;
      this.importeDolares = this.precioDolar * cantidad + this.igvDolar;
      this.importeSoles = this.precioSoles * cantidad + this.igvSoles;

    }
    else {
      //TO DO: FUNCION PARA EL OTRO TIPO DE PLATA
    }
  }
  updateTicket() {
    const compra = this.list.controls['compra'].value;
    const cantidad = this.list.controls['cantidad'].value;
    this.precioSolesR = compra * this.precioDolarR;
    this.precioSoles = compra * this.precioDolarR;
    this.importeDolares = this.precioDolar * cantidad + this.igvDolar;
    this.importeSoles = this.precioSoles * cantidad + this.igvSoles;
  }
  crearTicket(){
  const compra = this.list.controls['moneda'].value;
  let nevoTicket: Ticket; // Quitamos la inicialización como objeto vacío
  if (compra === 'SOLES') {
    nevoTicket = {
      id: Math.random().toString(36).substr(2, 9),
      ticket: this.list.controls['ticket'].value,
      cantidad: this.list.controls['cantidad'].value, // Asigna el valor correspondiente
      undmedida: this.list.controls['unidadm'].value,
      descripcion: 'no c',
      preciou: this.precioSoles,
      igv: this.igvSoles,
      descuento: '0.000',
      importe: this.importeSoles
    };
  } else {
    nevoTicket = {
      id: Math.random().toString(36).substr(2, 9),
      ticket: this.list.controls['ticket'].value,
      cantidad: this.list.controls['cantidad'].value, // Asigna el valor correspondiente
      undmedida: this.list.controls['unidadm'].value,
      descripcion: 'no c',
      preciou: this.precioDolar,
      igv: this.igvDolar,
      descuento: '0.000',
      importe: this.importeDolares
    };
  }

  this.ticket.createTicket(nevoTicket).subscribe(
    response => {
      this.getTickets();
    },
    error => {
      console.error('Error al crear el ticket:', error);
    }
  );

  
  }

}
