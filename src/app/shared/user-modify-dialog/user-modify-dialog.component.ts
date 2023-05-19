import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserManagementService } from 'src/app/services/user-management.service';

@Component({
  selector: 'app-user-modify-dialog',
  templateUrl: './user-modify-dialog.component.html',
  styleUrls: ['./user-modify-dialog.component.css']
})
export class UserModifyDialogComponent implements OnInit {
  userForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<UserModifyDialogComponent>, private fb: FormBuilder,private service: UserManagementService, 
    @Inject(MAT_DIALOG_DATA) public selectedElement: any) 
  {
    this.userForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.userForm.controls['id'].setValue(this.selectedElement.id);
    this.userForm.controls['name'].setValue(this.selectedElement.name);
    this.userForm.controls['role'].setValue(this.selectedElement.role);
    this.userForm.controls['password'].setValue(this.selectedElement.password);
  }

  onSubmit(form: FormGroup){
      const user = form.value;
    this.service.modifyUser(user.id,user).subscribe(response => {
    console.log('Usuario modificado:', response);
    this.dialogRef.close();
  }, error => {
    console.error('Error al modificar el usuario:', error);
  });
 
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
