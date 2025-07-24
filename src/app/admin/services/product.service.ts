import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../modules/iproduct';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ICategor } from '../modules/icategor';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }
  loadProducts(): Observable<Iproduct[]> {
    return this._http.get<Iproduct[]>(`${environment.baseUrl}/products`);
  }
  addProduct(product: Iproduct): Observable<Iproduct> {
    return this._http.post<Iproduct>(`${environment
      .baseUrl}/products`, product);
  }

  getCategories(): Observable<ICategor[]> {
    return this._http.get<ICategor[]>(`${environment.baseUrl}/categories`);
  }
  addCategory(category: ICategor): Observable<ICategor >
   { return this._http.post<ICategor>(`${environment.baseUrl}/categories`, category); }
}
