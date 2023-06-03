import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PartnerService } from 'src/app/services/partner.service';

export interface DatosProducto {
  producto: string;
  codigo: string;
}

const dataproducto: DatosProducto[] = [
  {codigo: 'RFF', producto: 'RACIMO DE FRUTA FRESCA DE P.A'},
  {codigo: 'FS', producto: 'FRUTO SUELTO DE P.A'},
];


@Component({
  selector: 'app-partner-creation-dialog',
  templateUrl: './partner-creation-dialog.component.html',
  styleUrls: ['./partner-creation-dialog.component.css']
})
export class PartnerCreationDialogComponent implements OnInit {

  formulario: FormGroup;
  dataSource = new MatTableDataSource(dataproducto);
  displayedColumns: string[] = ['codigo', 'producto']; 
  


  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<PartnerCreationDialogComponent>, private service: PartnerService) {
    
    this.formulario = this.fb.group({
      estadosocio: ['', Validators.required],
      genero: ['', Validators.required],
      codigo: ['', Validators.required],
      dateasoc: [new Date().toISOString(), Validators.required],
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
      cuentas: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    //agregar metodo
  }

  onSubmit(formulario: FormGroup) {
  this.formulario.value.id = Math.random().toString(36).substr(2, 9);
  const partner = formulario.value;
  this.service.createPartners(partner).subscribe(response => {
  console.log('Usuario creado:', response);
  this.dialogRef.close();
}, error => {
  console.error('Error al crear el usuario:', error);
});

}

onClose(): void {
  this.dialogRef.close();
}
}
