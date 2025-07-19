import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { IUsers } from '../modules/i-users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http:HttpClient) { }
  getAllUsers():Observable<IUsers[]>{
  return this._http.get<IUsers[]>(environment.baseUrl+'/users');
  }

}
