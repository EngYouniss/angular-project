import { Component } from '@angular/core';
import { Product } from '../../modules/products';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'Welcome to the Home Page';
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
    // Add more products as needed
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
