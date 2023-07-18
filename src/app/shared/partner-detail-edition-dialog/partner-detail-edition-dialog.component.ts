import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PartnerService } from 'src/app/services/partner.service';
import { PartnerDetail } from 'src/app/Interfaces/PartnerDetail';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { SocioAlertDialogComponent } from '../socio-alert-dialog/socio-alert-dialog.component';
@Component({
  selector: 'app-partner-detail-edition-dialog',
  templateUrl: './partner-detail-edition-dialog.component.html',
  styleUrls: ['./partner-detail-edition-dialog.component.css'],
  animations: [
    trigger('hoverAnimation', [
      state('initial', style({})),
      state('hovered', style({ background: 'lightgray' })),
      transition('initial => hovered', animate('225ms ease')),
      transition('hovered => initial', animate('225ms ease')),
    ]),
  ],
})
export class PartnerDetailEditionDialogComponent implements OnInit {

  partner: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<PartnerDetailEditionDialogComponent>, private service: PartnerService,
    @Inject(MAT_DIALOG_DATA) public selectedDetail: PartnerDetail) {
    
    this.partner = this.fb.group({
      id: ['', Validators.required],
      id_socio: ['', Validators.required],
      documento: ['', Validators.required],
      condicion: ['', Validators.required],
      docgeneral: ['', Validators.required],
      observaciones: ['', Validators.required],
      nombrepredio: ['', Validators.required],
      titular1: ['', Validators.required],
      titular2: ['', Validators.required],
      partida: ['', Validators.required],
      centroidee: ['', Validators.required],
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
      p5: [''],
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
      productividad: ['', Validators.required],

    });
}
ngOnInit(): void {
  this.partner.controls['id'].setValue(this.selectedDetail.id);
  this.partner.controls['id_socio'].setValue(this.selectedDetail.id_socio);
  this.partner.controls['documento'].setValue(this.selectedDetail.documento);
  this.partner.controls['condicion'].setValue(this.selectedDetail.condicion);
  this.partner.controls['docgeneral'].setValue(this.selectedDetail.docgeneral);
  this.partner.controls['observaciones'].setValue(this.selectedDetail.observaciones);
  this.partner.controls['nombrepredio'].setValue(this.selectedDetail.nombrepredio);
  this.partner.controls['titular1'].setValue(this.selectedDetail.titular1);
  this.partner.controls['titular2'].setValue(this.selectedDetail.titular2);
  this.partner.controls['partida'].setValue(this.selectedDetail.partida);
  this.partner.controls['centroidee'].setValue(this.selectedDetail.centroidee);
  this.partner.controls['centroiden'].setValue(this.selectedDetail.centroiden);
  this.partner.controls['codcatastral'].setValue(this.selectedDetail.codcatastral);
  this.partner.controls['area'].setValue(this.selectedDetail.area);
  this.partner.controls['localidadpred'].setValue(this.selectedDetail.localidadpred);
  this.partner.controls['distritopred'].setValue(this.selectedDetail.distritopred);
  this.partner.controls['provinciapred'].setValue(this.selectedDetail.provinciapred);
  this.partner.controls['departamentopred'].setValue(this.selectedDetail.departamentopred);
  this.partner.controls['areatotalpalma'].setValue(this.selectedDetail.areatotalpalma);
  this.partner.controls['p1'].setValue(this.selectedDetail.p1);
  this.partner.controls['p2'].setValue(this.selectedDetail.p2);
  this.partner.controls['p3'].setValue(this.selectedDetail.p3);
  this.partner.controls['p4'].setValue(this.selectedDetail.p4);
  this.partner.controls['p5'].setValue(this.selectedDetail.p5);
  this.partner.controls['ano1'].setValue(this.selectedDetail.ano1);
  this.partner.controls['ano2'].setValue(this.selectedDetail.ano2);
  this.partner.controls['ano3'].setValue(this.selectedDetail.ano3);
  this.partner.controls['ano4'].setValue(this.selectedDetail.ano4);
  this.partner.controls['ano5'].setValue(this.selectedDetail.ano5);
  this.partner.controls['plantas1'].setValue(this.selectedDetail.plantas1);
  this.partner.controls['plantas2'].setValue(this.selectedDetail.plantas2);
  this.partner.controls['plantas3'].setValue(this.selectedDetail.plantas3);
  this.partner.controls['plantas4'].setValue(this.selectedDetail.plantas4);
  this.partner.controls['plantas5'].setValue(this.selectedDetail.plantas5);
  this.partner.controls['usoprevio'].setValue(this.selectedDetail.usoprevio);
  this.partner.controls['productividad'].setValue(this.selectedDetail.productividad);

}
onSubmit(partner: FormGroup) {
  const editedPartner = partner.value;
  this.service.patchPartnerDetail(editedPartner).subscribe(response => {
  console.log('Se actualizo el socio', response);
  this.dialogRef.close();
}, error => {
  console.error('Error al visualizar datos', error);
});

}


}
