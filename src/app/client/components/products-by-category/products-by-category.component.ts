import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../modules/iproducts';
import { ApiServiceService } from '../../services/api-service.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { NavbarComponent } from "../../../client/layout/components/navbar/navbar.component";

@Component({
  selector: 'app-products-by-category',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './products-by-category.component.html',
  styleUrl: './products-by-category.component.scss'
})
export class ProductsByCategoryComponent implements OnInit {

  products: Iproducts[] = [];

  constructor(private _apiService: ApiServiceService, private _router: ActivatedRoute,private _cartService: CartService) { }
  ngOnInit(): void {
    this.loadProductsByCategory();
  }
    loadProductsByCategory() {
    this._router.queryParamMap.subscribe(
      data => {
        const id = Number(data.get('id'));
        this._apiService.getProsuctsByCategory(id).subscribe({
            next:(data)=>this.products=data
        })
    })
  }

  addToCart(product: Iproducts) {
    this._cartService.addToCart(product);
  }

}
