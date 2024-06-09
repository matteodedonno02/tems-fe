import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ToastComponent } from '../components/toast/toast.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastComponent
  ],
  exports: [
    ReactiveFormsModule,
    TranslateModule,
    CommonModule,
    ToastComponent
  ]
})
export class SharedModule { }
