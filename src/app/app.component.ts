import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'ACEPAT';
  public isLoggedIn: boolean = false;
  
  constructor(private authService: AuthService, private cdr: ChangeDetectorRef) {}
  
  ngOnInit() {
  this.authService.isLoggedIn$.subscribe(isLoggedIn => {
  this.isLoggedIn = isLoggedIn;
  console.log(isLoggedIn);
  this.cdr.detectChanges();
  });
  }
  }