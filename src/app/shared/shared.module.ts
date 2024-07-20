import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ToastComponent } from '../components/toast/toast.component';
import { LoginComponent } from '../pages/login/login.component';
import { Swiper } from "swiper"
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    ReactiveFormsModule,
    TranslateModule,
    CommonModule,
    NgbModule
  ]
})
export class SharedModule { }
