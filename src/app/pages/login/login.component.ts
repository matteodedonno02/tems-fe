import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';
import { Toast } from 'bootstrap';

@Component({
  selector: 'app-login',
  imports: [
    SharedModule
  ],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  errorsName: string[] = []

  readonly object = Object

  loginFailedMessage: string
  loginFailedTitle: string

  constructor(
    private usersService: UsersService,
    private fb: FormBuilder,
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  login() {
    
    const username = this.loginForm.get('username')?.value
    const password = this.loginForm.get('password')?.value
    this.usersService.login(username, password)
      .subscribe({
        next: (response: {token: string}) => {
          this.localStorageService.setToken(response.token)
          this.router.navigate(['/admin'])
        },
        error: (response) => {
          this.loginFailedMessage = 'login_fail'
          this.loginFailedTitle = response.error.message
          new Toast('#login-failed-toast').show()
        }
      })
  }
}
