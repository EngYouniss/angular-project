import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NumberValueAccessor } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { Router, RouterModule } from "@angular/router";
import { ApiServiceService } from '../../services/api-service.service';
import { Iproducts } from '../../modules/iproducts';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent implements OnInit {


  constructor(private _apiService: ApiServiceService,private _router:Router,private _cartService:CartService) { }
  products: Iproducts[] = [] as Iproducts[];
  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe({
      next: (data) => this.products = data,}
    );
  }
  loadProducts(): void {
    this._apiService.getAllProducts().subscribe({
      next: (data) => this.products = data,}
    );
  }

  addToCart(product: Iproducts) {
    return this._cartService.addToCart(product);
  }

  viewDetails(id:number|undefined){
    this._router.navigateByUrl(`details/${id}`);
  }

}
