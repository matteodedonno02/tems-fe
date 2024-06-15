import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { ShopService } from './services/shop.service';
import { Shop } from './models/shop';
import { environment } from '../environments/environment';
import { register } from 'swiper/element/bundle'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'tems-fe';

  constructor(
    private shopService: ShopService,
  ) { }

  ngOnInit() {
    register()

    this.shopService
      .getShop()
      .subscribe({
        next: (shop: Shop) => {
          const logoUrl = `${environment.baseApi}/file/${shop.logoFile.uuid}`
          document.getElementById('favicon').setAttribute('href', logoUrl)
        }
      })
  }
}
