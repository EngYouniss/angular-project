import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproducts } from '../modules/iproducts';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _httpClient:HttpClient) { }

  getAllProducts():Observable<Iproducts[]>{
  return this._httpClient.get<Iproducts[]>(environment.baseUrl+'/products');
  }

  getProductById(id:number):Observable<Iproducts>{
    return this._httpClient.get<Iproducts>(environment.baseUrl+'/products/'+id);
  }

}
