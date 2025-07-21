import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsersService } from './users.service';
import { IUsers } from '../modules/i-users';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private authObservable:BehaviorSubject<boolean>;
 private isLogged: boolean = false;
  constructor(private _httpClient:HttpClient) {
this.authObservable=new BehaviorSubject<boolean>(false);
  }

  login(email:string,password:string):Observable<IUsers[]>{
  return this._httpClient.get<IUsers[]>(`${environment.baseUrl}/users?email=${email}&password=${password}`);
  }
  logout(){
    localStorage.removeItem('token');
    this.authObservable.next(false);
  }

  getUserStatus( ){
    return this.isLogged
  }
  getAuthObservable(): BehaviorSubject<boolean> {
    return this.authObservable;
  }
}
