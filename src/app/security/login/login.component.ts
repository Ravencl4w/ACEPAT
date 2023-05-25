import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

    loginForm: FormGroup;
  
    constructor(private fb: FormBuilder, private service: AuthService,
      private router: Router) {
      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
    }
  ngOnInit(): void {
    this.service.setIsLoggedIn(false);
  }

    result: any;
   
  
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.service.GetUserbyCode(this.loginForm.value.username).subscribe(item => {
        this.result = item;
        if (this.result.password === this.loginForm.value.password) {
            this.service.setIsLoggedIn(true);
            this.router.navigate(["acopio-racimos"]);
        } else {
          console.log("usuario incorrecto")
        }
      });

    } 
    
  }
  }


