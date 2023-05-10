import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-acopio-de-racimos',
  templateUrl: './acopio-de-racimos.component.html',
  styleUrls: ['./acopio-de-racimos.component.css']
})
export class AcopioDeRacimosComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  date: string;
  position: number;
  turbity: number;
  ph: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, date: '2023-05-02', turbity: 1.0079, ph: 0},
  {position: 2, date: '2023-05-02', turbity: 4.0026, ph: 7},
  {position: 3, date: '2023-05-01', turbity: 6.941, ph: 7},
  {position: 4, date: '2023-05-01', turbity: 9.0122, ph: 8},
  {position: 5, date: '2023-04-30', turbity: 10.811, ph: 7},
  {position: 6, date: '2023-04-30', turbity: 12.0107, ph: 7},
  {position: 7, date: '2023-04-25', turbity: 14.0067, ph: 7},
  {position: 8, date: '2023-04-22', turbity: 15.9994, ph: 7},
  {position: 9, date: '2023-04-20', turbity: 18.9984, ph: 9},
  {position: 10, date: '2023-04-19', turbity: 20.1797, ph: 9},
  {position: 11, date: '2023-04-18', turbity: 22.9897, ph: 9},
  {position: 12, date: '2023-04-17', turbity: 24.305, ph: 10},
  {position: 13, date: '2023-04-16', turbity: 26.9815, ph: 12},
  {position: 14, date: '2023-04-16', turbity: 28.0855, ph: 7},
  {position: 15, date: '2023-04-16', turbity: 30.9738, ph: 14},
  {position: 16, date: '2023-04-16', turbity: 32.065, ph: 14},
  {position: 17, date: '2023-04-14', turbity: 35.453, ph: 6},
  {position: 18, date: '2023-04-09', turbity: 39.948, ph: 9},
  {position: 19, date: '2023-04-06', turbity: 39.0983, ph: 10},
  {position: 20, date: '2023-04-02', turbity: 40.078, ph: 10},
];
