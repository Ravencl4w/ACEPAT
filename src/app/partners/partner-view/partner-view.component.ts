import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Partner } from 'src/app/interfaces/Partner';
import { PartnerService } from 'src/app/services/partner.service';
import { PartnerCreationDialogComponent } from 'src/app/shared/partner-creation-dialog/partner-creation-dialog.component';
import { PartnerEditionDialogComponent } from 'src/app/shared/partner-edition-dialog/partner-edition-dialog.component';
import * as XLSX from 'xlsx';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { DeleteDialogComponent } from 'src/app/shared/delete-dialog/delete-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSort } from '@angular/material/sort';
import { RestorePartnerDialogComponent } from 'src/app/shared/restore-partner-dialog/restore-partner-dialog.component';


@Component({
  selector: 'app-partner-view',
  templateUrl: './partner-view.component.html',
  styleUrls: ['./partner-view.component.css'],
  animations: [
    trigger('hoverAnimation', [
      state('initial', style({})),
      state('hovered', style({ background: 'lightgray' })),
      transition('initial => hovered', animate('225ms ease')),
      transition('hovered => initial', animate('225ms ease')),
    ]),
  ],
})
export class PartnerViewComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'code',
    'comitesectorial',
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
  dataSource = new MatTableDataSource<Partner>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) 
  sort!: MatSort;
  selectedElement: any;
  filtroDNI!: string;
  filtroSocio!: string;
  showInactivePartners = false;

  constructor(private service: PartnerService, private dialog: MatDialog) {}
  ngAfterViewInit() {
    this.getPartners();
  }

  getPartners(): void {
    this.service.getPartners().subscribe((partners) => {
      if (this.showInactivePartners) {
        // Mostrar socios activos
        this.dataSource = new MatTableDataSource<Partner>(
          partners.filter((partner) => partner.estado === 'I')
        );
      } else {
        // Mostrar socios inactivos
        this.dataSource = new MatTableDataSource<Partner>(
          partners.filter((partner) => partner.estado === 'A')
        );
      }
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  exportToExcel(): void {
    const data = this.dataSource.data;
  
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');
  
    XLSX.writeFile(workbook, 'datos.xlsx');
  }
  

  openCreationDialog(): void {
    this.dialog.open(PartnerCreationDialogComponent, {
    });
  }
  openEditionDialog(element: Partner): void {
    this.selectedElement = element;
    const dialogRef = this.dialog.open(PartnerEditionDialogComponent, {
      data: this.selectedElement
    });
    dialogRef.afterClosed().subscribe(result => {
      // Aquí puedes llamar al método que deseas cuando se cierra el diálogo
      this.getPartners();
    });
  }
  
  deleteRow(element: Partner): void {
    this.selectedElement = element;
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: this.selectedElement
    });
    dialogRef.afterClosed().subscribe(result => {
      // Aquí puedes llamar al método que deseas cuando se cierra el diálogo
      this.getPartners();
    });
}

restoreRow(element: Partner): void {
  this.selectedElement = element;
  const dialogRef = this.dialog.open(RestorePartnerDialogComponent, {
    data: this.selectedElement
  });
  dialogRef.afterClosed().subscribe(result => {
    // Aquí puedes llamar al método que deseas cuando se cierra el diálogo
    this.getPartners();
  });
}

aplicarFiltros() {
  if(this.filtroDNI&&this.filtroSocio){
    this.service.getPartnersFilterNameDni(this.filtroSocio,this.filtroDNI).subscribe((partners) => {
      this.dataSource = new MatTableDataSource<Partner>(partners);
      this.dataSource.paginator = this.paginator;
    });
  }
  else{
    if (this.filtroDNI) {
      this.service.getPartnersFilterDni(this.filtroDNI).subscribe((partners) => {
        this.dataSource = new MatTableDataSource<Partner>(partners);
        this.dataSource.paginator = this.paginator;
      });
    }
    else if (this.filtroSocio) {
      this.service.getPartnersFilterName(this.filtroSocio).subscribe((partners) => {
        this.dataSource = new MatTableDataSource<Partner>(partners);
        this.dataSource.paginator = this.paginator;
      });
    } else {
      this.getPartners();
    }
  }
}

}
