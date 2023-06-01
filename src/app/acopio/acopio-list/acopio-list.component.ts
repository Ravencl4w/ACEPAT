import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AcopioCreationDialogComponent } from 'src/app/shared/acopio-creation-dialog/acopio-creation-dialog.component';

@Component({
  selector: 'app-acopio-list',
  templateUrl: './acopio-list.component.html',
  styleUrls: ['./acopio-list.component.css']
})
export class AcopioListComponent {

  constructor(private dialog: MatDialog) {}

  openAcopioCreationDialog(): void {
    this.dialog.open(AcopioCreationDialogComponent, {
    });
  }

}
