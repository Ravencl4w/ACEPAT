import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-debt-dialog',
  templateUrl: './create-debt-dialog.component.html',
  styleUrls: ['./create-debt-dialog.component.css']
})
export class CreateDebtDialogComponent {

  deudas: FormGroup;

  constructor(private fb: FormBuilder) {
    this.deudas = this.fb.group({
      codigo: ['', Validators.required],
      docidentidad: ['', Validators.required],
      numerodoc: ['', Validators.required],
      sector: ['', Validators.required],
      estado: ['', Validators.required],
      nombres: ['', Validators.required]
    });
    //FIN FORMULARIO
  }

}
