import { Injectable } from '@angular/core';
import { IallProducts } from '../modules/iall-products';
import { ICategories } from '../modules/icategories';

@Injectable({
  providedIn: 'root'
})
export class StaticProductServiceService {

  constructor() { }
  filteredProducts: IallProducts[] = [];
   products: IallProducts[] = [
      {
        name: 'Product 1',
        price: 100,
        image: 'https://picsum.photos/200/300',
        description: 'Description for Product 1',
        category_id: 3
      },
      {
        name: 'Product 2',
        price: 200,
        image: 'https://picsum.photos/200/300',
        description: 'Description for Product 2',
        category_id: 1
      }
      ,
      {
        name: 'Product 3',
        price: 300,
        image: 'https://picsum.photos/200/300',
        description: 'Description for Product 3',
        category_id: 1
      },
      {
        name: 'Product 4',
        price: 400,
        image: 'https://picsum.photos/200/300',
        description: 'Description for Product 4',
        category_id: 2
      },
      {
        name: 'Product 5',
        price: 500,
        image: 'https://picsum.photos/200/300',
        description: 'Description for Product 5',
        category_id: 2
      }
    ]
    categories: ICategories[] = [
      {
        id: 1,
        name: 'laptops',
        description: 'Description for Category 1',

      },
      {
        id: 2,
        name: 'smartphones',
        description: 'Description for Category 2'
      },
      {
        id: 3,
        name: 'tablets',
        description: 'Description for Category 3'
      }
    ]
    applyFilter( selectedCat: number): void {
   if(selectedCat===0)
   {
    this.filteredProducts=this.products;
   }
   else{
    this.filteredProducts=this.products.filter((prod)=>prod.category_id===selectedCat);
   }
  }
}
