import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('comercializacion', [
      state('expanded', style({ maxHeight: '500px' })),
      state('collapsed', style({ maxHeight: '0' })),
      transition('expanded <=> collapsed', animate('0.3s ease-in-out'))
    ])
  ]
})

export class SidebarComponent {
  isComercializacionOpen: boolean = false;

  toggleComercializacion() {
    this.isComercializacionOpen = !this.isComercializacionOpen;
  }

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.setIsLoggedIn(false);
  }
}
