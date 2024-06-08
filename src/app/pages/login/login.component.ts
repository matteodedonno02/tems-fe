import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

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

  constructor(
    private usersService: UsersService,
    private fb: FormBuilder
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
        next: () => {
          console.log('so good')
        },
        error: () => {
          console.log('user not found... :(')
        }
      })
  }
}
