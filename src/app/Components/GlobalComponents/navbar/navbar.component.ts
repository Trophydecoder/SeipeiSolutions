import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  sidebarWidth = 0;

  openLSide() {
    this.sidebarWidth = 100; // adjust the width as needed
  }

  closeLSide() {
    this.sidebarWidth = 0;
  }
}
