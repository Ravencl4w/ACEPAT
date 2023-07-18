import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AcopioCreationDialogComponent } from 'src/app/shared/acopio-creation-dialog/acopio-creation-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { AcopioService } from 'src/app/services/acopio.service';
import { AcopioList } from 'src/app/Interfaces/AcopioList';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-acopio-list',
  templateUrl: './acopio-list.component.html',
  styleUrls: ['./acopio-list.component.css'],
  animations: [
    trigger('hoverAnimation', [
      state('initial', style({})),
      state('hovered', style({ background: 'lightgray' })),
      transition('initial => hovered', animate('225ms ease')),
      transition('hovered => initial', animate('225ms ease')),
    ]),
  ],
})
export class AcopioListComponent implements AfterViewInit {
  
  displayedColumns: string[] = ['fechadoc', 'fechaing', 'fechaolp', 'doc',"num_doc","serie","numero","codigoacopio","numerodoc","datos","tipos","transaccion","cuentaban","cuentacte","moneda","cantidad","pago","neto","descuentosoles","flete","importesoles","estado","usuario"];
  dataSource = new MatTableDataSource<AcopioList>

  constructor(private dialog: MatDialog, private service: AcopioService) {}
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.getAcopios();
  }

  getAcopios(): void {
    this.service.getAcopiosList()
      .subscribe(acopios => {
        this.dataSource = new MatTableDataSource<AcopioList>(acopios);
        this.dataSource.paginator = this.paginator;

      });
  }

  openAcopioCreationDialog(): void {
    this.dialog.open(AcopioCreationDialogComponent, {
      height: '900px',
    });
  }

}
