import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShopService } from '../../services/shop.service';
import { UsersService } from '../../services/users.service';
import { Toast } from 'bootstrap';
import { ToastComponent } from '../../components/toast/toast.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-configuration',
  standalone: true,
  imports: [
    SharedModule,
    ToastComponent
  ],
  templateUrl: './initial-configuration.component.html',
  styleUrl: './initial-configuration.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InitialConfigurationComponent implements OnInit, AfterViewInit {

  swiper: any;
  changePasswordFailedMessage: string = ''
  selectedFile: File | null
  newPasswordForm: FormGroup
  shopForm: FormGroup

  object = Object

  constructor(
    private fb: FormBuilder,
    private shopService: ShopService,
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newPasswordForm = this.fb.group({
      newPassword: [null, [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/)]]
    })
    this.shopForm = this.fb.group({
      shopName: [null, [Validators.required]],
      shopLogo: [null, [Validators.required]]
    })
  }

  ngAfterViewInit() {
    this.swiper = document.querySelector('swiper-container')
  }

  onImagePicked(event: any) {
    this.selectedFile = event.target.files[0];
  }

  saveConfiguration() {
    const shopName = this.shopForm.get('shopName').value
    this.shopService
      .saveConfiguration(this.selectedFile, shopName)
      .subscribe({
        next: () => {
          this.router.navigate(['admin'])
        }
      })
  }

  changePassword() {
    const newPassword = this.newPasswordForm.get('newPassword').value
    this.usersService
      .changePassword(newPassword)
      .subscribe({
        next: () => {
          this.next()
        },
        error: (resp) => {
          this.changePasswordFailedMessage = resp.error.message
          new Toast(document.querySelector('#change-password-failed-toast')).show()
        }
      })
  }

  next() {
    this.swiper.swiper.slideNext()
  }
}
