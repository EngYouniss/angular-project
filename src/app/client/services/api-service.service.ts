import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { Iproducts } from '../modules/iproducts';
import { environment } from '../../../environments/environment.development';
import { ICategories } from '../modules/icategories';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _httpClient:HttpClient) { }

  getAllProducts():Observable<Iproducts[]>{
  return this._httpClient.get<{ products :Iproducts[]}>(environment.baseUrl+'/products').pipe(
    map((prod)=>prod.products),

  );
  }
  getProsuctsByCategory(id:number):Observable<Iproducts[]>{

return this._httpClient.get<Iproducts[]>(`${environment.baseUrl}/products?category_id=${id}`);

    }
  getProductById(id:number):Observable<Iproducts>{
    return this._httpClient.get<Iproducts>(environment.baseUrl+'/products/'+id);
  }

  getAllCategories():Observable<ICategories[]>{
    return this._httpClient.get<ICategories[]>(environment.baseUrl+'/categories');
  }

    addProduct(newProduct:Iproducts):Observable<Iproducts>{
return this._httpClient.post<Iproducts>(environment.baseUrl+'/products',newProduct);
    }

    search(item:string):Observable<Iproducts[]>{
      return this._httpClient.get<Iproducts[]>(`${environment.baseUrl}/products?name=${item}`)
    }
}
