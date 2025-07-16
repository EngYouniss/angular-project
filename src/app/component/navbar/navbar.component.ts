import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IallProducts } from '../../modules/iall-products';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private _cartService:CartService){}
  allCartProducts:IallProducts[] = [];
  getAllCart(){
    this.allCartProducts=this._cartService.getProducts();
  }

}
