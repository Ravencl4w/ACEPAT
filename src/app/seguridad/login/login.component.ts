import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterFeature } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
  
    constructor(private fb: FormBuilder, private service: AuthService,
      private router: Router) {
      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

    result: any;
    ngOnInit(): void {
      //ingresar codigo aca
    }
  
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.service.GetUserbyCode(this.loginForm.value.username).subscribe(item => {
        this.result = item;
        if (this.result.password === this.loginForm.value.password) {
          if (this.result.isactive) {
            sessionStorage.setItem('username',this.result.username);
            sessionStorage.setItem('role',this.result.role);
            this.router.navigate(["acopio-racimos"]);
          } else {
            console.log("hola")
          }
        } else {
          console.log("hola")
        }
      });

      this.router.navigate(["acopio-racimos"]);
    } 
  }
  }


