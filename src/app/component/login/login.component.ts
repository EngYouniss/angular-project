import { Component } from '@angular/core';
import { AuthService } from '../../client/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: '../../client/login/login.component.html',
  styleUrl: '../../client/login/login.component.css'
})
export class LoginComponent {
  constructor(private _AuthService: AuthService,private _routerService:Router) {

  }
  login(){
    this._AuthService.login();
    this._routerService.navigateByUrl('/home');
  }
}
