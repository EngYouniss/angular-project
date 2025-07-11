import { Component, Input, input } from '@angular/core';
import { Product } from '../../modules/products';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "../about/about.component";
import { Allproduct } from '../../allproduct';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  onDeleteProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }
  products: Product[] = [

    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 100,
      imageUrl: 'https://placehold.co/600x400',
      category: 1,
      stock: 10
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 200,
      imageUrl: 'https://placehold.co/600x400',
      category: 1,
      stock: 5
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 300,
      imageUrl: 'https://placehold.co/600x400',
      category: 3,
      stock: 0,
    },
      {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 300,
      imageUrl: 'https://placehold.co/600x400',
      category: 3,
      stock: 0,
    }
  ];
}
