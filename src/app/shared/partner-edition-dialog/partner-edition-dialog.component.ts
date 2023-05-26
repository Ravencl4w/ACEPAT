import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Partner } from 'src/app/interfaces/Partner';
import { PartnerService } from 'src/app/services/partner.service';


@Component({
  selector: 'app-partner-edition-dialog',
  templateUrl: './partner-edition-dialog.component.html',
  styleUrls: ['./partner-edition-dialog.component.css'],
})

export class PartnerEditionDialogComponent implements OnInit {

  partner: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<PartnerEditionDialogComponent>, private service: PartnerService,
    @Inject(MAT_DIALOG_DATA) public selectedElement: Partner) {
    
    this.partner = this.fb.group({
      id: ['', Validators.required],
      dni: ['', Validators.required],
      nombre: ['', Validators.required],
      estado: ['', Validators.required],
      fechanaci: ['', Validators.required],
      estadocivil: ['', Validators.required],
      gradoinstruccion: ['', Validators.required],
      telefono: ['', Validators.required],
      comitesectorial: ['', Validators.required],
      entidadbancaria: ['', Validators.required],
      nrocuenta: ['', Validators.required],
      email: ['', Validators.required],
      residencia: ['', Validators.required],
      localidad: ['', Validators.required],
      distrito: ['', Validators.required],
      provincia: ['', Validators.required],
      departamento: ['', Validators.required],
      beneficiario: ['', Validators.required],
      dnibeneficiario: ['', Validators.required],
      estadodelpredio: ['', Validators.required]

    });
  }
  ngOnInit(): void {
    this.partner.controls['id'].setValue(this.selectedElement.id);
    this.partner.controls['dni'].setValue(this.selectedElement.dni);
    this.partner.controls['nombre'].setValue(this.selectedElement.nombre);
    this.partner.controls['estado'].setValue(this.selectedElement.estado);
    this.partner.controls['fechanaci'].setValue(this.selectedElement.fechanaci);
    this.partner.controls['estadocivil'].setValue(this.selectedElement.estadocivil);
    this.partner.controls['gradoinstruccion'].setValue(this.selectedElement.gradoinstruccion);
    this.partner.controls['telefono'].setValue(this.selectedElement.telefono);
    this.partner.controls['comitesectorial'].setValue(this.selectedElement.comitesectorial);
    this.partner.controls['entidadbancaria'].setValue(this.selectedElement.entidadbancaria);
    this.partner.controls['nrocuenta'].setValue(this.selectedElement.nrocuenta);
    this.partner.controls['email'].setValue(this.selectedElement.email);
    this.partner.controls['residencia'].setValue(this.selectedElement.residencia);
    this.partner.controls['localidad'].setValue(this.selectedElement.localidad);
    this.partner.controls['distrito'].setValue(this.selectedElement.distrito);
    this.partner.controls['provincia'].setValue(this.selectedElement.provincia);
    this.partner.controls['departamento'].setValue(this.selectedElement.departamento);
    this.partner.controls['beneficiario'].setValue(this.selectedElement.beneficiario);
    this.partner.controls['dnibeneficiario'].setValue(this.selectedElement.dnibeneficiario);
    this.partner.controls['estadodelpredio'].setValue(this.selectedElement.estadodelpredio);

  }

  onSubmit(partner: FormGroup) {
    const editedPartner = partner.value;
    this.service.patchPartner(editedPartner).subscribe(response => {
    console.log('Se actualizo el socio', response);
    this.dialogRef.close();
  }, error => {
    console.error('Error al visualizar datos', error);
  });
  
  }

onClose(): void {
  this.dialogRef.close();
}
}
