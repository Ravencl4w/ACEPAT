import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Partner } from 'src/app/interfaces/Partner';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent {
  constructor(private service: PartnerService, @Inject(MAT_DIALOG_DATA) public selectedElement: Partner ) {}
  deletePartner(){
    this.service.setPartnerToInactive(this.selectedElement).subscribe(response => {
    console.log('Se elimino el socio', response);
  }, error => {
    console.error('Error al eliminar socio', error);
  });
  }
}
