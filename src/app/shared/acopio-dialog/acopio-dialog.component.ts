import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-acopio-dialog',
  templateUrl: './acopio-dialog.component.html',
  styleUrls: ['./acopio-dialog.component.css']
})
export class AcopioDialogComponent implements OnInit {

  formulario: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AcopioDialogComponent>) {
    this.formulario = this.fb.group({
      socio: ['', Validators.required],
      apellidosNombres: ['', Validators.required],
      cantidad: ['', Validators.required],
      produccion: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup) {
    console.log('Formulario enviado:', form.value);
    this.dialogRef.close();
  }

  onClose(): void {
    this.dialogRef.close();
  }

}