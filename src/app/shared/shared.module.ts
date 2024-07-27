import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ToastComponent } from '../components/toast/toast.component';
import { LoginComponent } from '../pages/login/login.component';
import { Swiper } from "swiper"
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollDirective } from '../directives/infinite-scroll.directive';
import { InfiniteScrollListComponent } from '../components/infinite-scroll-list/infinite-scroll-list.component';
import { AdminNavbarComponent } from '../components/admin-navbar/admin-navbar.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NgbModule,
    InfiniteScrollDirective,
    FormsModule
  ],
  exports: [
    ReactiveFormsModule,
    TranslateModule,
    CommonModule,
    NgbModule,
    InfiniteScrollDirective,
    FormsModule
  ]
})
export class SharedModule { }
