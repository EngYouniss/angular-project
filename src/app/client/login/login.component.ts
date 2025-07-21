import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IUsers } from '../modules/i-users';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user: IUsers = {
    username: '',
    email: '',
    password: ''
  };
  constructor(private _AuthService: AuthService, private _routerService: Router) {

  }
login() {
  this._AuthService.login(this.user.email, this.user.password).subscribe({
    next: (res) => {
      if (res.length > 0) {  // تحقق إن المستخدم موجود

        this._routerService.navigateByUrl('/home');
      } else {
        console.log('Login failed');
      }
    },
    error: (err) => {
      console.error('Login error:', err);
    }
  });
}


errorMessage: string = '';
}
