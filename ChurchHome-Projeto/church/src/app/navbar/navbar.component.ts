import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginModalComponent } from '../components/login-modal/login-modal.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LoginModalComponent 
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isModalOpen = false;

  openLoginModal(): void {
    this.isModalOpen = true;
  }

  closeLoginModal(): void {
    this.isModalOpen = false;
  }
}