import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, from, map, of, startWith } from 'rxjs';
import { PartnerService } from 'src/app/services/partner.service';

export interface DatosProducto {
  producto: string;
  codigo: string;
}

const dataproducto: DatosProducto[] = [
  { codigo: 'RFF', producto: 'RACIMO DE FRUTA FRESCA DE P.A' },
  { codigo: 'FS', producto: 'FRUTO SUELTO DE P.A' },
];

@Component({
  selector: 'app-partner-creation-dialog',
  templateUrl: './partner-creation-dialog.component.html',
  styleUrls: ['./partner-creation-dialog.component.css'],
})
export class PartnerCreationDialogComponent implements OnInit {
  formulario: FormGroup;
  dataSource = new MatTableDataSource(dataproducto);
  filteredOptions!: Observable<string[]>;
  filteredProvincias!: Observable<string[]>;
  filteredDistritos!: Observable<string[]>;
  displayedColumns: string[] = ['codigo', 'producto'];
  options: string[] = [
    'Amazonas',
    'Ancash',
    'Apurimac',
    'Arequipa',
    'Ayacucho',
    'Cajamarca',
    'Callao',
    'Cusco',
    'Huancavelica',
    'Huanuco',
    'Ica',
    'Junin',
    'La Libertad',
    'Lambayeque',
    'Lima',
    'Loreto',
    'Madre de Dios',
    'Moquegua',
    'Pasco',
    'Piura',
    'Puno',
    'San Martin',
    'Tacna',
    'Tumbes',
    'Ucayali',
  ];
  departamentoProvincias: { [key: string]: string[] } = {
    Amazonas: [
      'Chachapoyas',
      'Bagua',
      'Bongara',
      'Condorcanqui',
      'Luya',
      'Rodríguez de Mendoza',
      'Utcubamba',
    ],
    Ancash: [
      'Huaraz',
      'Aija',
      'Antonio Raimondi',
      'Asunción',
      'Bolognesi',
      'Carhuaz',
      'Carlos Fermín Fitzcarrald',
      'Casma',
      'Corongo',
      'Huari',
      'Huarmey',
      'Huaylas',
      'Mariscal Luzuriaga',
      'Ocros',
      'Pallasca',
      'Pomabamba',
      'Recuay',
      'Santa',
      'Sihuas',
      'Yungay',
    ],
    Apurimac: [
      'Abancay',
      'Andahuaylas',
      'Antabamba',
      'Aymaraes',
      'Cotabambas',
      'Chincheros',
      'Grau',
    ],
    Arequipa: [
      'Arequipa',
      'Camaná',
      'Caravelí',
      'Castilla',
      'Caylloma',
      'Condesuyos',
      'Islay',
      'La Unión',
    ],
    Ayacucho: [
      'Huamanga',
      'Cangallo',
      'Huanca Sancos',
      'Huanta',
      'La Mar',
      'Lucanas',
      'Parinacochas',
      'Páucar del Sara Sara',
      'Sucre',
      'Víctor Fajardo',
      'Vilcashuamán',
    ],
    Cajamarca: [
      'Cajamarca',
      'Cajabamba',
      'Celendín',
      'Chota',
      'Contumazá',
      'Cutervo',
      'Hualgayoc',
      'Jaén',
      'San Ignacio',
      'San Marcos',
      'San Miguel',
      'San Pablo',
      'Santa Cruz',
    ],
    Callao: [
      'Carhuaz',
      'Carlos Fermín Fitzcarrald',
      'Casma',
      'Corongo',
      'Huari',
      'Huarmey',
      'Huaylas',
      'Mariscal Luzuriaga',
      'Ocros',
      'Pallasca',
      'Pomabamba',
      'Recuay',
      'Santa',
      'Sihuas',
      'Yungay',
      'Abancay',
      'Andahuaylas',
      'Antabamba',
      'Aymaraes',
      'Cotabambas',
    ],
    Cusco: [
      'Cuzco',
      'Acomayo',
      'Anta',
      'Calca',
      'Canas',
      'Canchis',
      'Chumbivilcas',
      'Espinar',
      'La Convención',
      'Paruro',
      'Paucartambo',
      'Quispicanchi',
      'Urubamba',
    ],
    Huancavelica: [
      'Huancavelica',
      'Acobamba',
      'Angaraes',
      'Castrovirreyna',
      'Churcampa',
      'Huaytará',
      'Tayacaja',
    ],
    Huanuco: [
      'Huánuco',
      'Ambo',
      'Dos de Mayo',
      'Huacaybamba',
      'Huamalíes',
      'Leoncio Prado',
      'Marañón',
      'Pachitea',
      'Puerto Inca',
      'Lauricocha',
      'Yarowilca',
    ],
    Ica: ['Ica', 'Chincha', 'Nazca', 'Palpa', 'Pisco'],
    Junin: [
      'Huancayo',
      'Chanchamayo',
      'Chupaca',
      'Concepción',
      'Jauja',
      'Junín',
      'Satipo',
      'Tarma',
      'Yauli',
    ],
    'La Libertad': [
      'Trujillo',
      'Ascope',
      'Bolívar',
      'Chepén',
      'Gran Chimú',
      'Julcán',
      'Otuzco',
      'Pacasmayo',
      'Pataz',
      'Sánchez Carrión',
      'Santiago de Chuco',
      'Virú',
    ],
    Lambayeque: ['Chiclayo', 'Ferreñafe', 'Lambayeque'],
    'Lima Metropolitana': ['Lima'],
    Lima: [
      'Lima',
      'Huaura',
      'Barranca',
      'Cajatambo',
      'Canta',
      'Cañete',
      'Huaral',
      'Huarochirí',
      'Oyón',
      'Yauyos',
    ],
    Loreto: [
      'Maynas',
      'Alto Amazonas',
      'Datem del Marañón',
      'Loreto',
      'Mariscal Ramón Castilla',
      'Putumayo',
      'Requena',
      'Ucayali',
    ],
    'Madre de Dios': ['Tambopata', 'Manu', 'Tahuamanu'],
    Moquegua: ['Mariscal Nieto', 'General Sánchez Cerro', 'Ilo'],
    Pasco: ['Pasco', 'Daniel Alcides Carrión', 'Oxapampa'],
    Piura: [
      'Piura',
      'Ayabaca',
      'Huancabamba',
      'Morropón',
      'Paita',
      'Sechura',
      'Sullana',
      'Talara',
    ],
    Puno: [
      'Puno',
      'Azángaro',
      'Carabaya',
      'Chucuito',
      'El Collao',
      'Huancané',
      'Lampa',
      'Melgar',
      'Moho',
      'San Antonio de Putina',
      'San Román',
      'Sandia',
      'Yunguyo',
    ],
    'San Martin': [
      'Moyobamba',
      'Bellavista',
      'El Dorado',
      'Huallaga',
      'Lamas',
      'Mariscal Cáceres',
      'Picota',
      'Rioja',
      'San Martín',
      'Tocache',
    ],
    Tacna: ['Tacna', 'Candarave', 'Jorge Basadre', 'Tarata'],
    Tumbes: ['Tumbes', 'Contralmirante Villar', 'Zarumilla'],
    Ucayali: ['Coronel Portillo', 'Atalaya', 'Padre Abad', 'Purús'],
  };
  distritoProvincias: { [key: string]: string[] } = {
    'Chachapoyas':['Chachapoyas','Asunción','Balsas','Cheto','Chiliquín','Chuquibamba','Granada','Huancas','La Jalca','Leimebamba','Levanto','Magdalena','Mariscal Castilla','Molinopampa','Montevideo','Olleros','Quinjalca','San Francisco de Daguas','San Isidro de Maino','Soloco','Sonche'],
    'Bagua':['Bagua','Aramango','Copallín','El Parco','Imaza','La Peca'],
    'Bongara':['Jumbilla','Chisquilla','Churuja','Corosha','Cuispes','Florida','Jazán','Recta','San Carlos','Shipasbamba','Valera','Yambrasbamba'],
    'Condorcanqui':['Nieva','El Cenepa','Río Santiago'],
    'Luya':['Lámud','Camporredondo','Cocabamba','Colcamar','Conila','Inguilpata','Longuita','Lonya Chico','Luya','Luya Viejo','María','Ocalli','Ocumal','Pisuquía','Providencia','San Cristóbal','San Francisco del Yeso','San Jerónimo','San Juan de Lopecancha','Santa Catalina','Santo Tomás','Tingo','Trita'],
    'Rodríguez de Mendoza':['San Nicolás','Chirimoto','Cochamal','Huambo','Limabamba','Longar','Mariscal Benavides','Mílpuc','Omia','Santa Rosa','Totora','Vista Alegre'],
    'Utcubamba':['Bagua Grande','Cajaruro','Cumba','El Milagro','Jamalca','Lonya Grande','Yamón'],
    'Huaraz':['Huaraz','Cochabamba','Colcabamba','Huanchay','Independencia','Jangas','La Libertad','Olleros','Pampas Grande','Pariacoto','Pira','Tarica'],
    'Aija':['Aija','Coris','Huacllán','La Merced','Succha'],
    'Antonio Raimondi':['Llamellín','Aczo','Chaccho','Chingas','Mirgas','San Juan de Rontoy'],
    'Asunción':['Chacas','Acochaca'],
    'Bolognesi':['Chiquián','Abelardo Pardo','Antonio Raimondi','Aquia','Cajacay','Canis','Cólquioc','Huallanca','Huasta','Huayllacayán','La Primavera','Mangas','Pacllón','San Miguel de Corpanqui','Ticllos'],
    'Carhuaz':['Carhuaz','Acopampa','Amashca','Anta','Ataquero','Marcará','Pariahuanca','San Miguel de Aco','Shilla','Tinco','Yungar'],

  };

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PartnerCreationDialogComponent>,
    private service: PartnerService,
    private datePipe: DatePipe
  ) {
    this.formulario = this.fb.group({
      estadosocio: ['', Validators.required],
      genero: ['', Validators.required],
      codigo: ['', Validators.required],
      dateasoc: [this.datePipe.transform(new Date(), 'dd/MM/yyyy'), Validators.required],
      dateemp: [new Date().toISOString(), Validators.required],
      tipodoc: ['', Validators.required],
      numerodoc: ['', Validators.required],
      datenac: [new Date().toISOString(), Validators.required],
      apellidop: ['', Validators.required],
      celular: ['', Validators.required],
      apellidom: ['', Validators.required],
      nombres: ['', Validators.required],
      ruc: ['', Validators.required],
      estadocivil: ['', Validators.required],
      gradoi: ['', Validators.required],
      produccion: ['', Validators.required],
      direccion: ['', Validators.required],
      ocupacion: ['', Validators.required],

      dpto: ['', Validators.required],
      provincia: ['', Validators.required],
      distrito: ['', Validators.required],
      comitecentral: ['', Validators.required],
      comitelocal: ['', Validators.required],

      parientes: ['', Validators.required],
      fundos: ['', Validators.required],
      cuentas: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.filteredOptions = this.formulario.controls['dpto'].valueChanges.pipe(
      startWith(''),
      map((value) => this.filterOptions(value, this.options))
    );
    this.filteredProvincias = this.formulario.controls[
      'provincia'
    ].valueChanges.pipe(
      startWith(''),
      map((value) => this.filterProvincia(value, this.departamentoProvincias))
    );
    this.filteredDistritos = this.formulario.controls[
      'distrito'
    ].valueChanges.pipe(
      startWith(''),
      map((value) => this.filterDistrito(value, this.distritoProvincias))
    );
  }

  onSubmit(formulario: FormGroup) {
    this.formulario.value.id = Math.random().toString(36).substr(2, 9);
    const partner = formulario.value;
    this.service.createPartners(partner).subscribe(
      (response) => {
        console.log('Usuario creado:', response);
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error al crear el usuario:', error);
      }
    );
  }

  onClose(): void {
    this.dialogRef.close();
  }

  validateNumberInput(event: KeyboardEvent) {
    const keyCode = event.which || event.keyCode;
    const keyValue = String.fromCharCode(keyCode);

    // Verificar si el keyValue ingresado no es un número
    if (/\D/.test(keyValue)) {
      event.preventDefault(); // Prevenir la entrada de teclado
    }
  }

  filterOptions(value: string, options: string[]): string[] {
    const filterValue = value.toLowerCase();
    return options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  filterProvincia(
    value: string,
    departamentoProvincias: { [key: string]: string[] }
  ): string[] {
    const filterProvincias = value.toLowerCase();
    const selectedDpto = this.formulario.controls['dpto'].value;
    const provincias = departamentoProvincias[selectedDpto] || [];
    return provincias.filter((provincia) =>
      provincia.toLowerCase().includes(filterProvincias)
    );
  }

  filterDistrito(
    value: string,
    distritoProvincias: { [key: string]: string[] }
  ): string[] {
    const filterDistritos = value.toLowerCase();
    const selectedProvincia = this.formulario.controls['provincia'].value;
    const distritos = distritoProvincias[selectedProvincia] || [];
    return distritos.filter((distrito) =>
      distrito.toLowerCase().includes(filterDistritos)
    );
  }

  onDptoSelected(event: any) {
    const selectedDpto = event.option.value;
    const provinciasDepartamento = {
      [selectedDpto]: this.departamentoProvincias[selectedDpto],
    };
    this.filteredProvincias = this.formulario.controls[
      'provincia'
    ].valueChanges.pipe(
      startWith(''),
      map((value) => this.filterProvincia(value, provinciasDepartamento))
    );
  }

  onProvinciaSelected(event: any) {
    const selectedProvincia = event.option.value;
    const distritoProvincias = {
      [selectedProvincia]: this.distritoProvincias[selectedProvincia],
    };
    this.filteredDistritos = this.formulario.controls[
      'distrito'
    ].valueChanges.pipe(
      startWith(''),
      map((value) => this.filterDistrito(value, distritoProvincias))
    );
  }
}
