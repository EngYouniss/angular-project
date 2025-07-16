import { Injectable } from '@angular/core';
import { IallProducts } from '../modules/iall-products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
productsItems: IallProducts[] = [];
addToCart(product: IallProducts) {
  this.productsItems.push(product);

}
getProducts(): IallProducts[] {
  return this.productsItems;
  
}
}
