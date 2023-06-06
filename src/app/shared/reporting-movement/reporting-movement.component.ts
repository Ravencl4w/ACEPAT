import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reporting-movement',
  templateUrl: './reporting-movement.component.html',
  styleUrls: ['./reporting-movement.component.css']
})
export class ReportingMovementComponent {

  aportes: FormGroup;

  constructor(private fb: FormBuilder) {
  this.aportes = this.fb.group({
    codigo: ['', Validators.required],
    dni: ['', Validators.required],
    caja: ['', Validators.required],
    nombres: ['', Validators.required],
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
}
