import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  logout() {
    this.localStorageService.clearToken()
    this.router.navigate(['/login'])
  }
}
