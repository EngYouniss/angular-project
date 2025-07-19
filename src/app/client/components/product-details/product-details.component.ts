import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Iproducts } from '../../modules/iproducts';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  constructor(private _apiService: ApiServiceService, private _router: ActivatedRoute,private _cartService:CartService) { }

  productDetails?: Iproducts;

ngOnInit(): void {
  this.loadPoduct();

}
  loadPoduct() {

    const id = Number(this._router.snapshot.paramMap.get('id'));
    console.log(id);
    this._apiService.getProductById(id).subscribe({
      next: (data) => this.productDetails = data
    })
  }
  addToCart(  ){
    if(!this.productDetails) return
    this._cartService.addToCart(this.productDetails);
  }
}
