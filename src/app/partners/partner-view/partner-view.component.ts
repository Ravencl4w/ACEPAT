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
import { MatSort } from '@angular/material/sort';
import { RestorePartnerDialogComponent } from 'src/app/shared/restore-partner-dialog/restore-partner-dialog.component';
import { DatePipe } from '@angular/common';

interface Tecnico {
  id: string;
  nombre: string;
}

const listaTecnicos: Tecnico[] = [
  { id: '1', nombre: 'Leonel C. Padilla Herrera' },
  { id: '2', nombre: 'Delmer A. Acuña Sobrado' },
  { id: '3', nombre: 'Mishel sevillano morillo' },
  { id: '4', nombre: 'Nurali Malla Correa' },
  { id: '5', nombre: 'Jefry Alexander Zegarra Campos' },
  { id: '6', nombre: 'Mily Villanueva Delgado' },
  { id: '7', nombre: 'Gian Marco Flores Lopez' },
  { id: '8', nombre: 'Nick Anderson Pinedo Lopez' },
  { id: '9', nombre: 'Erick Marteines Mendieta' },
  { id: '10', nombre: 'Jean Carlo Soto de la Cruz' }
];

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
    'tecnico',
    'dni',
    'nombre',
    'delete'
  ];
  dataSource = new MatTableDataSource<Partner>();
  isFiltered = false;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) 
  sort!: MatSort;
  selectedElement: any;
  filtroDNI!: string;
  filtroSocio!: string;
  filtroComite!: string;
  showInactivePartners = false;

  constructor(private service: PartnerService, private dialog: MatDialog,private datePipe: DatePipe) {}
  ngAfterViewInit() {
    this.getPartners();
  }

  getPartners(): void {
    this.service.getPartners().subscribe((partners) => {
      if (this.showInactivePartners) {
        // Mostrar socios activos
        this.dataSource = new MatTableDataSource<Partner>(
          partners.filter((partner) => partner.estado === 'NH')
        );
      } else {
        // Mostrar socios inactivos
        this.dataSource = new MatTableDataSource<Partner>(
          partners.filter((partner) => partner.estado === 'H')
        );
      }
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  exportToExcel(): void {
    const data = this.dataSource.data;
  
    // Reemplazar el ID del técnico con el nombre correspondiente durante la asignación de los datos
    const formattedData = data.map(item => {
      const tecnico = listaTecnicos.find(t => t.id === item.tecnico);
      const nombreTecnico = tecnico ? tecnico.nombre : '';
      const formattedDate = this.datePipe.transform(item.fechanaci, 'dd/MM/yyyy');
      return { ...item, fechanaci: formattedDate, tecnico: nombreTecnico };
    });
  
    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
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
    dialogRef.afterClosed().subscribe(() => {
      if(this.isFiltered === false){
      this.getPartners();
      }
      else{
      this.aplicarFiltros();
      }
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

getTecnicoValueById(id: string): string {
  const tecnico = listaTecnicos.find(item => item.id === id);
  return tecnico ? tecnico.nombre : '';
}

aplicarFiltros() {
  this.isFiltered = true;
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
    } 
    else if (this.filtroComite) {
      this.service.getPartnersFilterComite(this.filtroComite).subscribe((partners) => {
        this.dataSource = new MatTableDataSource<Partner>(partners);
        this.dataSource.paginator = this.paginator;
      });
    }
    else {
      this.getPartners();
    }
  }
}

}