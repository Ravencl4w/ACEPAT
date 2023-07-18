import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Partner } from 'src/app/interfaces/Partner';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-socio-alert-dialog',
  templateUrl: './socio-alert-dialog.component.html',
  styleUrls: ['./socio-alert-dialog.component.css']
})
export class SocioAlertDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SocioAlertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onConfirm(): void {
    // Emitir true para indicar que el usuario hizo clic en "Aceptar".
    this.dialogRef.close(true);
  }

  onCancel(): void {
    // El usuario hizo clic en "Cancelar" o cerró el diálogo.
    // No necesitamos emitir nada, simplemente cerrar el diálogo.
    this.dialogRef.close();
  }
}