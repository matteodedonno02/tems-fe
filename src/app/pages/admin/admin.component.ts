import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { ShopService } from '../../services/shop.service';
import { Shop } from '../../models/shop';
import { environment } from '../../../environments/environment';
import { UsersService } from '../../services/users.service';
import { AdminNavbarComponent } from '../../components/admin-navbar/admin-navbar.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    SharedModule,
    AdminNavbarComponent,
    RouterOutlet
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {

  selectedTab: string = ''
  shop: Shop

  environment = environment

  constructor(
    private usersService: UsersService,
    private shopService: ShopService,
    private router: Router
  ) { }

  ngOnInit() {
    this.shopService.getShop()
      .subscribe({
        next: shop => {
          this.shop = shop
          console.log(this.shop)
        }
      })
  }

}
