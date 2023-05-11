import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-partner-creation-dialog',
  templateUrl: './partner-creation-dialog.component.html',
  styleUrls: ['./partner-creation-dialog.component.css']
})
export class PartnerCreationDialogComponent implements OnInit {

  formulario: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<PartnerCreationDialogComponent>, private service: PartnerService) {
    this.formulario = this.fb.group({
      fecha: [new Date().toISOString(), Validators.required],
      codigo: ['', Validators.required],
      dni: ['', Validators.required],
      socio: ['', Validators.required],
      central: ['', Validators.required],
      local: ['', Validators.required],
      direccion: ['', Validators.required],
      estados: ['', Validators.required],
      fundos: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    //agregar metodo
  }

  onSubmit(formulario: FormGroup) {
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
