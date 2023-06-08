import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface TablaAportes {
  aporte: string;
  periodo: number;
  monto: number;
  descripcion: string;
}

const ELEMENT_DATA: TablaAportes[] = [
  {
    aporte: 'Aporte 1',
    periodo: 1,
    monto: 100,
    descripcion: 'Descripción del aporte 1',
  },
  {
    aporte: 'Aporte 2',
    periodo: 2,
    monto: 200,
    descripcion: 'Descripción del aporte 2',
  },
  {
    aporte: 'Aporte 3',
    periodo: 3,
    monto: 300,
    descripcion: 'Descripción del aporte 3',
  },
];


@Component({
  selector: 'app-collect-contributions',
  templateUrl: './collect-contributions.component.html',
  styleUrls: ['./collect-contributions.component.css']
})
export class CollectContributionsComponent {

  aportes: FormGroup;
  modoEdicion = false;
  displayedColumns: string[] = ['aporte', 'periodo', 'monto', 'descripcion'];
  dataSource = ELEMENT_DATA;
  selectedData!: TablaAportes;

  constructor(private fb: FormBuilder) {
    this.aportes = this.fb.group({
      aporte: ['', Validators.required],
      periodomes: ['', Validators.required],
      monto: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
    //FIN FORMULARIO
  }
  activarModoEdicion() {
    this.modoEdicion = !this.modoEdicion;
    if (!this.modoEdicion) {
      this.aportes.patchValue(this.aportes.value); // Restaurar los valores originales del formulario si se cancela la edición
    }
  }
  seleccionarFila(row: TablaAportes) {
    this.selectedData = row;
    this.aportes.patchValue({
      aporte: row.aporte,
      periodomes: row.periodo,
      monto: row.monto,
      descripcion: row.descripcion
    });
  }
  
}
