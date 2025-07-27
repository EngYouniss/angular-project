import { Injectable } from '@angular/core';
import { IUsers } from '../../client/modules/i-users';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private _http:HttpClient) { }
  addNewUser(user:IUsers):Observable<IUsers>{
    return this._http.post<IUsers>(`${environment.baseUrl}/users`,user);
  }
}
