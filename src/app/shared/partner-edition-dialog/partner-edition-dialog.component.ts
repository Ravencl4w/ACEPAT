import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PartnerService } from 'src/app/services/partner.service';


@Component({
  selector: 'app-partner-edition-dialog',
  templateUrl: './partner-edition-dialog.component.html',
  styleUrls: ['./partner-edition-dialog.component.css'],
})

export class PartnerEditionDialogComponent implements OnInit {

  partner: FormGroup;
  partnerData: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<PartnerEditionDialogComponent>, private service: PartnerService) {
    
    this.partner = this.fb.group({
      id_socio: ['', Validators.required],
      dni: ['', Validators.required],
      nombre: ['', Validators.required],
      estado: ['', Validators.required],
      date_nac: [new Date().toISOString(), Validators.required],
      estado_civil: ['', Validators.required],
      grado_i: ['', Validators.required],
      telefono: ['', Validators.required],
      comite_sec: ['', Validators.required],
      entidad_bancaria: ['', Validators.required],
      nro_cuenta: ['', Validators.required],
      email: ['', Validators.required],
      residencia: ['', Validators.required],
      localidad: ['', Validators.required],
      distrito: ['', Validators.required],
      provincia: ['', Validators.required],
      departamento: ['', Validators.required],
      beneficiario: ['', Validators.required],
      dni_beneficiario: ['', Validators.required],
      predio: ['', Validators.required]

    });
    this.partnerData = this.fb.group({
      documento: ['', Validators.required],
      condicion: ['', Validators.required],
      docgeneral: ['', Validators.required],
      observaciones: ['', Validators.required],
      nombrepredio: ['', Validators.required],
      titular1: ['', Validators.required],
      titular2: ['', Validators.required],
      partida: ['', Validators.required],
      centroide: ['', Validators.required],
      centroiden: ['', Validators.required],
      codcatastral: ['', Validators.required],
      area: ['', Validators.required],
      localidadpred: ['', Validators.required],
      distritopred: ['', Validators.required],
      provinciapred: ['', Validators.required],
      departamentopred: ['', Validators.required],
      areatotalpalma: ['', Validators.required],
      p1: ['', Validators.required],
      p2: ['', Validators.required],
      p3: ['', Validators.required],
      p4: ['', Validators.required],
      p5: ['', Validators.required],
      ano1: ['', Validators.required],
      ano2: ['', Validators.required],
      ano3: ['', Validators.required],
      ano4: ['', Validators.required],
      ano5: ['', Validators.required],
      plantas1: ['', Validators.required],
      plantas2: ['', Validators.required],
      plantas3: ['', Validators.required],
      plantas4: ['', Validators.required],
      plantas5: ['', Validators.required],
      usoprevio: ['', Validators.required],
      productividad: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    //agregar metodo
  }

  onSubmit(partner: FormGroup,partnerData:FormGroup) {
    const partner2 = partner.value;
    this.service.createPartners(partner2).subscribe(response => {
    console.log('Datos de socio', response);
    this.dialogRef.close();
  }, error => {
    console.error('Error al visualizar datos', error);
  });
  
  }

onClose(): void {
  this.dialogRef.close();
}
}
