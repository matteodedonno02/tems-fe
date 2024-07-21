import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Shop } from '../../models/shop';
import { UsersService } from '../../services/users.service';
import { SharedModule } from '../../shared/shared.module';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  standalone: true,
  imports: [
    SharedModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.scss'
})
export class AdminNavbarComponent {
  @Input() shop: Shop

  environment = environment

  constructor(
    private usersService: UsersService
  ) { }

  logout() {
    this.usersService.logout()
  }
}
