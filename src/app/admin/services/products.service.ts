import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { IdummyProducts } from '../modules/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient: HttpClient) {
    this.getProducts();
  }

  private _products$ = new BehaviorSubject<IdummyProducts[]>([]);
  products$ = this._products$.asObservable();
  getProducts() {
    this._httpClient.get<{ products: IdummyProducts[] }>(`${environment.baseUrl2}/products`).pipe(
      map((prod) => prod.products)).subscribe(
        {
          next: (data) => this._products$.next(data)
        }
      );
  }

addProducts(data: IdummyProducts) {
  return this._httpClient
    .post<IdummyProducts>(`${environment.baseUrl2}/products/add`, data)
    .pipe(
      tap((newData) => {
  const currentData = this._products$.value;
  this._products$.next([...currentData, newData]);
})

    );
}



}
