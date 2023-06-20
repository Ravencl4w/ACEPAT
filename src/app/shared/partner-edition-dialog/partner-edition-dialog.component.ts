import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Partner } from 'src/app/interfaces/Partner';
import { PartnerService } from 'src/app/services/partner.service';
import { DeletePartnerDetailDialogComponent } from '../delete-partner-detail-dialog/delete-partner-detail-dialog.component';
import { PartnerDetail } from 'src/app/Interfaces/PartnerDetail';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { PartnerDetailEditionDialogComponent } from '../partner-detail-edition-dialog/partner-detail-edition-dialog.component';

@Component({
  selector: 'app-partner-edition-dialog',
  templateUrl: './partner-edition-dialog.component.html',
  styleUrls: ['./partner-edition-dialog.component.css'],
  animations: [
    trigger('hoverAnimation', [
      state('initial', style({})),
      state('hovered', style({ background: 'lightgray' })),
      transition('initial => hovered', animate('225ms ease')),
      transition('hovered => initial', animate('225ms ease')),
    ]),
  ],
})

export class PartnerEditionDialogComponent implements OnInit {
  
  displayedColumns: string[] = [
    'id',
    'dni',
    'nombre',
    'estado',
    'fechanaci',
    'residencia',
    'localidad',
    'distrito',
    'provincia',
    'departamento',
    'delete',
  ];
  dataSource = new MatTableDataSource<PartnerDetail>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  partner: FormGroup;
  selectedDetail: any;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<PartnerEditionDialogComponent>, private service: PartnerService,
    @Inject(MAT_DIALOG_DATA) public selectedElement: Partner, private dialog: MatDialog) {
    
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
    this.getPartnerDetail();
    this.partner.controls['id'].setValue(this.selectedElement.id);
    this.partner.controls['dni'].setValue(this.selectedElement.dni);
    this.partner.controls['nombre'].setValue(this.selectedElement.nombre);
    this.partner.controls['estado'].setValue(this.selectedElement.estado);
    this.partner.controls['fechanaci'].setValue(new Date(this.selectedElement.fechanaci));
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

getPartnerDetail(): void {
  this.service.getPartnerDetails(this.selectedElement.id).subscribe((partnerDetails) => {
    this.dataSource = new MatTableDataSource<PartnerDetail>(partnerDetails);
    this.dataSource.paginator = this.paginator;
  });
}
openEditionDialog(element: PartnerDetail): void {
  this.selectedDetail = element;
  const dialogRef = this.dialog.open(PartnerDetailEditionDialogComponent, {
    data: this.selectedDetail
  });
  dialogRef.afterClosed().subscribe(result => {
    // Aquí puedes llamar al método que deseas cuando se cierra el diálogo
    this.getPartnerDetail();
  });
}
deleteRow(element: PartnerDetail): void {
  this.selectedDetail = element;
  const dialogRef = this.dialog.open(DeletePartnerDetailDialogComponent, {
    data: this.selectedDetail
  });
  dialogRef.afterClosed().subscribe(result => {
    // Aquí puedes llamar al método que deseas cuando se cierra el diálogo
    this.getPartnerDetail();
  });
}
}
