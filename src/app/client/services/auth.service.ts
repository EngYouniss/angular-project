import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private authObservable:BehaviorSubject<boolean>;
  constructor() {
this.authObservable=new BehaviorSubject<boolean>(false);
  }
  login(){
    localStorage.setItem('token', 'true');
this.authObservable.next(true);
  }
  logout(){
    localStorage.removeItem('token');
    this.authObservable.next(false);
  }

  getUserStatus(){
    return localStorage.getItem('token');
  }
  getAuthObservable(): BehaviorSubject<boolean> {
    return this.authObservable;
  }
}
