import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/Interfaces/User';
import { UserManagementService } from 'src/app/services/user-management.service';
import { UserCreationDialogComponent } from 'src/app/shared/user-creation-dialog/user-creation-dialog.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'role', 'password'];
  dataSource = new MatTableDataSource<User>

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private service: UserManagementService, private dialog: MatDialog) {}
  ngAfterViewInit() {
    
    this.getUsers();
  }

  getUsers(): void {
    this.service.getUsers()
      .subscribe(users => {
        this.dataSource = new MatTableDataSource<User>(users);
        this.dataSource.paginator = this.paginator;

      });
  }

  exportToExcel(): void {
    const data = this.dataSource.data;
    const paginatedData = data.slice(this.paginator.pageIndex * this.paginator.pageSize, (this.paginator.pageIndex + 1) * this.paginator.pageSize);
  
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(paginatedData);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');
  
    XLSX.writeFile(workbook, 'datos.xlsx');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserCreationDialogComponent, {
      width: '500px'
    });
  }
}

