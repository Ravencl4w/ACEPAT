import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserManagementService } from 'src/app/services/user-management.service';

@Component({
  selector: 'app-user-creation-dialog',
  templateUrl: './user-creation-dialog.component.html',
  styleUrls: ['./user-creation-dialog.component.css']
})
export class UserCreationDialogComponent {

  userForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<UserCreationDialogComponent>, private fb: FormBuilder,private service: UserManagementService) 
  {
    this.userForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


    

  onSubmit(form: FormGroup){
      const user = form.value;
    this.service.createUser(user).subscribe(response => {
    console.log('Usuario creado:', response);
    this.dialogRef.close();
  }, error => {
    console.error('Error al crear el usuario:', error);
  });
 
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
