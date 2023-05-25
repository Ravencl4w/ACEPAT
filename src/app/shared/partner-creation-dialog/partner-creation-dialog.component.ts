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
  selectedFile: File | null = null;
  selectedFileUrl: string | ArrayBuffer | null = null;


  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<PartnerCreationDialogComponent>, private service: PartnerService) {
    
    this.formulario = this.fb.group({
      date_emp: [new Date().toISOString(), Validators.required],
      date_asoc: [new Date().toISOString(), Validators.required],
      date_nac: [new Date().toISOString(), Validators.required],
      codigo: ['', Validators.required],
      foto: ['', Validators.required],
      tipo_doc: ['', Validators.required],
      numero_doc: ['', Validators.required],
      apellido_p: ['', Validators.required],
      apellido_m: ['', Validators.required],
      celular: ['', Validators.required],
      nombres: ['', Validators.required],
      ruc: ['', Validators.required],
      estado_civil: ['', Validators.required],
      grado_i: ['', Validators.required],
      produccion: ['', Validators.required],
      direccion: ['', Validators.required],
      ocupacion: ['', Validators.required],
      socio: ['', Validators.required],
      genero: ['', Validators.required],
      dpto: ['', Validators.required],
      provincia: ['', Validators.required],
      distrito: ['', Validators.required],
      comite_central: ['', Validators.required],
      comite_local: ['', Validators.required],
      parientes: ['', Validators.required],
      fundos: ['', Validators.required],
      cuentas: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    //agregar metodo
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.getFileUrl();
  }

  getFileUrl() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.selectedFileUrl = event.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
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
