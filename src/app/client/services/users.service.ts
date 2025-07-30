import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { IUsers } from '../modules/i-users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user:IUsers={username:'',email:'',password:''};
  constructor(private _http:HttpClient) { }
  getAllUsers():Observable<IUsers[]>{
  return this._http.get<IUsers[]>(environment.baseUrl+'/users');
  }
  // getUserByCredentials(email:string,password:string):Observable<IUsers>{
  //   return this._http.get<IUsers>(`${environment.baseUrl}/users?email=${email}&password=${password}`);
  // }

  createNewUser(user:IUsers):Observable<IUsers[]>{
    return this._http.post<IUsers[]>(`${environment.baseUrl}/users`,user);
  }
}
