import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { Observable, map, startWith } from 'rxjs';
import { GatheringService } from 'src/app/services/gathering.service';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-centro-acopio-dialog',
  templateUrl: './centro-acopio-dialog.component.html',
  styleUrls: ['./centro-acopio-dialog.component.css']
  
})
export class CentroAcopioDialogComponent implements OnInit{
  filteredCodigo!: Observable<string[]>;
  filteredDni!: Observable<string[]>;
  filteredNombre!: Observable<string[]>;
  filteredCodigoAcopio!: Observable<string[]>;
  filteredCentroAcopio!: Observable<string[]>;
  selectedCodigo: any;
  selectedCodigoAcopio: any;
  selectedCentroAcopio:any;
  selectedDni: any;
  selectedNombre: any; 

  grupo:FormGroup;
  constructor(private fb: FormBuilder, private service:PartnerService, private gatService: GatheringService) {
    this.grupo=this.fb.group({
      codigoacopio: ['', Validators.required],
      centroacopio: ['', Validators.required],
      saldosoles: ['', Validators.required],
      saldoacopio: ['', Validators.required],
      direccion1: ['', Validators.required],
      telefono: ['', Validators.required],
      codigosocio: ['', Validators.required],
      documento: ['', Validators.required],
      apellidoYnombres: ['', Validators.required],
      numdoc: ['', Validators.required],
      apellidopaterno: ['', Validators.required],
      apellidomaterno: ['', Validators.required],
      nombres: ['', Validators.required],
      direccion2: ['', Validators.required],
      ruc: ['', Validators.required],
      celular: ['', Validators.required],
    fecha:[new Date().toISOString(), Validators.required],
    })
  } 
ngOnInit(){
  this.loadOptions();
}
loadOptions() {
  this.gatService.getCenters().subscribe(data => {
    // Mapea los datos de respuesta al formato de opciones que necesitas (id y value)
    const options4 = data.map(item => item.centro);

    // Configura la lógica de filtrado y asigna las opciones filtradas a la variable
    this.filteredCentroAcopio = this.grupo.controls['centroacopio'].valueChanges.pipe(
      startWith(''),
      map(value => this.filterOptions(value, options4))
    );
  });
this.gatService.getCenters().subscribe(data => {
    // Mapea los datos de respuesta al formato de opciones que necesitas (id y value)
    const options = data.map(item => item.id);

    // Configura la lógica de filtrado y asigna las opciones filtradas a la variable
    this.filteredCodigoAcopio = this.grupo.controls['codigoacopio'].valueChanges.pipe(
      startWith(''),
      map(value => this.filterOptions(value, options))
    );
  });
  ////////////////////////////////////////////////////////////////////
  // Realiza la solicitud HTTP para obtener los datos del endpoint
  this.service.getPartners().subscribe((data) => {
    // Mapea los datos de respuesta al formato de opciones que necesitas (id y value)
    const optionsCodigo = data.map((item) => item.id);
    // Configura la lógica de filtrado y asigna las opciones filtradas a la variable
    this.filteredCodigo = this.grupo.controls['codigosocio'].valueChanges.pipe(
      startWith(''),
      map((value) => this.filterOptions(value, optionsCodigo))
    );
  });

  // Realiza la solicitud HTTP para obtener los datos del endpoint
  this.service.getPartners().subscribe((data) => {
    // Mapea los datos de respuesta al formato de opciones que necesitas (id y value)
    const optionsDNI = data.map((item) => item.dni);
    // Configura la lógica de filtrado y asigna las opciones filtradas a la variable
    this.filteredDni = this.grupo.controls['documento'].valueChanges.pipe(
      startWith(''),
      map((value) => this.filterOptions(value, optionsDNI))
    );
  });

  // Realiza la solicitud HTTP para obtener los datos del endpoint
  this.service.getPartners().subscribe((data) => {
    // Mapea los datos de respuesta al formato de opciones que necesitas (id y value)
    const optionsNombres = data.map((item) => item.nombre);
    // Configura la lógica de filtrado y asigna las opciones filtradas a la variable
    this.filteredNombre = this.grupo.controls['apellidoYnombres'].valueChanges.pipe(
      startWith(''),
      map((value) => this.filterOptions(value, optionsNombres))
    );
  });
}

filterOptions(value: string, options: string[]): string[] {
  // Filtra las opciones basadas en el valor de entrada
  const filterValue = value.toLowerCase();
  return options.filter(option => option.toLowerCase().includes(filterValue));
}


onCodigoSelected(event: any) {
  this.service.getPartnersById(event.option.value).subscribe((data) => {
    this.selectedCodigo = data.id;
    this.selectedDni = data.dni;
    this.selectedNombre = data.nombre;
  });
}
onDniSelected(event: any) {
  this.service.getPartnersByDni(event.option.value).subscribe((data) => {
    this.selectedCodigo = data.id;
    this.selectedDni = data.dni;
    this.selectedNombre = data.nombre;
  });
}
onNombreSelected(event: any) {
  this.service.getPartnersByName(event.option.value).subscribe((data) => {
    this.selectedCodigo = data.id;
    this.selectedDni = data.dni;
    this.selectedNombre = data.nombre;


  });
}
onCodigoAcopioSelected(event: any) {

  this.gatService.getCentersById(event.option.value).subscribe(data => {
this.selectedCodigoAcopio = data.id;
    this.selectedCentroAcopio = data.centro;

  });
}

onCentroAcopioSelected(event: any) {
  this.gatService.getCentersByName(event.option.value).subscribe(data => {
    this.selectedCodigoAcopio = data.id;
this.selectedCentroAcopio = data.centro;
  });
}
}
