import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-reporting-movement',
  templateUrl: './reporting-movement.component.html',
  styleUrls: ['./reporting-movement.component.css'],
})
export class ReportingMovementComponent implements OnInit {
  aportes: FormGroup;
  filteredCodigo!: Observable<string[]>;
  filteredDni!: Observable<string[]>;
  filteredNombre!: Observable<string[]>;
  selectedCodigo: any;
  selectedDni: any;
  selectedNombre: any;

  constructor(private fb: FormBuilder, private service: PartnerService) {
    this.aportes = this.fb.group({
      codigo: ['', Validators.required],
      dni: ['', Validators.required],
      nombres: ['', Validators.required],
      caja: ['', Validators.required],
      comprobantes: ['', Validators.required],
      serie: ['', Validators.required],
      correlativo: ['', Validators.required],
      fecha: ['', Validators.required],
      monto: ['', Validators.required],
      aporte: ['', Validators.required],
      glosa: ['', Validators.required],
      cargo: ['', Validators.required],
      abono: ['', Validators.required],
      saldo: ['', Validators.required],
    });
    //FIN FORMULARIO
  }
  ngOnInit() {
    this.loadOptions(); //CARGAR OPCIONES PARA AUTOCOMPLETE
  }

  loadOptions() {
    // Realiza la solicitud HTTP para obtener los datos del endpoint
    this.service.getPartners().subscribe((data) => {
      // Mapea los datos de respuesta al formato de opciones que necesitas (id y value)
      const optionsCodigo = data.map((item) => item.id);
      // Configura la lógica de filtrado y asigna las opciones filtradas a la variable
      this.filteredCodigo = this.aportes.controls['codigo'].valueChanges.pipe(
        startWith(''),
        map((value) => this.filterOptions(value, optionsCodigo))
      );
    });

    // Realiza la solicitud HTTP para obtener los datos del endpoint
    this.service.getPartners().subscribe((data) => {
      // Mapea los datos de respuesta al formato de opciones que necesitas (id y value)
      const optionsDNI = data.map((item) => item.dni);
      // Configura la lógica de filtrado y asigna las opciones filtradas a la variable
      this.filteredDni = this.aportes.controls['dni'].valueChanges.pipe(
        startWith(''),
        map((value) => this.filterOptions(value, optionsDNI))
      );
    });

    // Realiza la solicitud HTTP para obtener los datos del endpoint
    this.service.getPartners().subscribe((data) => {
      // Mapea los datos de respuesta al formato de opciones que necesitas (id y value)
      const optionsNombres = data.map((item) => item.nombre);
      // Configura la lógica de filtrado y asigna las opciones filtradas a la variable
      this.filteredNombre = this.aportes.controls['nombres'].valueChanges.pipe(
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
}
