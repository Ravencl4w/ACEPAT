import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AcopioCreationDialogComponent } from 'src/app/shared/acopio-creation-dialog/acopio-creation-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-acopio-list',
  templateUrl: './acopio-list.component.html',
  styleUrls: ['./acopio-list.component.css']
})
export class AcopioListComponent implements AfterViewInit {
  
  displayedColumns: string[] = ['fechadoc', 'fechaing', 'fechaolp', 'doc',"num_doc","serie","numero","cod_acopio","dni","datos","tipos","transaccion","banco","num_banco","moneda","cantidad","pago","neto","dscto","flete","total","estado","usuario"];
  dataSource = new MatTableDataSource<PeriodicElement>();
  constructor(private dialog: MatDialog) {}
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit(): void {
   
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }

  openAcopioCreationDialog(): void {
    this.dialog.open(AcopioCreationDialogComponent, {
      height: '900px',
    });
  }

}
