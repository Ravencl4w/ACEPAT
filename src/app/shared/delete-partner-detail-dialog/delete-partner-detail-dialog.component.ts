import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Partner } from 'src/app/interfaces/Partner';
import { PartnerDetail } from 'src/app/interfaces/PartnerDetail';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-delete-partner-detail-dialog',
  templateUrl: './delete-partner-detail-dialog.component.html',
  styleUrls: ['./delete-partner-detail-dialog.component.css']
})
export class DeletePartnerDetailDialogComponent {
  constructor(private service: PartnerService, @Inject(MAT_DIALOG_DATA) public selectedElement: PartnerDetail ) {}
  deletePartner(){
    this.service.deleteDetail(this.selectedElement).subscribe(response => {
    console.log('Se elimino el socio', response);
  }, error => {
    console.error('Error al eliminar socio', error);
  });
  }
}
