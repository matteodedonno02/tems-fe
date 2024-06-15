import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ToastComponent } from '../components/toast/toast.component';
import { LoginComponent } from '../pages/login/login.component';
import { Swiper } from "swiper"


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ReactiveFormsModule,
    TranslateModule,
    CommonModule
  ]
})
export class SharedModule { }
