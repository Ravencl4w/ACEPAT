import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AcopioService } from 'src/app/services/acopio.service';

@Component({
  selector: 'app-acopio-dialog',
  templateUrl: './acopio-dialog.component.html',
  styleUrls: ['./acopio-dialog.component.css']
})
export class AcopioDialogComponent implements OnInit {

  formulario: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AcopioDialogComponent>, private service: AcopioService) {
    this.formulario = this.fb.group({
      id: null,
      codigo: ['', Validators.required],
      produccion: ['', Validators.required],
      cantidad: [null, Validators.required],
      importe: [null, Validators.required],
      fecha: [new Date(), Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(formulario: FormGroup) {
    this.formulario.value.id = Math.random().toString(36).substr(2, 9);
  const partner = formulario.value;
  this.service.createAcopios(partner).subscribe(response => {
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