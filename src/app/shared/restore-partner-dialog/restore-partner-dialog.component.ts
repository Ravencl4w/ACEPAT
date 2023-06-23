import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Partner } from 'src/app/interfaces/Partner';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-restore-partner-dialog',
  templateUrl: './restore-partner-dialog.component.html',
  styleUrls: ['./restore-partner-dialog.component.css']
})
export class RestorePartnerDialogComponent {
  constructor(private service: PartnerService, @Inject(MAT_DIALOG_DATA) public selectedElement: Partner ) {}
  restorePartner(){
    this.service.setPartnerToActive(this.selectedElement).subscribe(response => {
    console.log('Se restauro el socio', response);
  }, error => {
    console.error('Error al restaurar el socio', error);
  });
  }
  
}
