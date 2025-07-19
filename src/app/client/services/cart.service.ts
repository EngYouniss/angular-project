import { Injectable } from '@angular/core';
import { IallProducts } from '../modules/iall-products';
import { Observable, of, Subscription } from 'rxjs';
import { Iproducts } from '../modules/iproducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
productsItems: Iproducts[] = [];


addToCart(product: Iproducts): void {
  const index = this.productsItems.findIndex(item => item.id === product.id);

  if (index !== -1) {
    // ✅ المنتج موجود مسبقًا، زِد الكمية فقط
    this.productsItems[index].quantity! += 1;
  } else {
    // ✅ المنتج غير موجود، أضفه مع الكمية = 1
    this.productsItems.push({ ...product, quantity: 1 });
  }
}

getAllCart():Observable<Iproducts[]>{
  return of(this.productsItems);
}


}
