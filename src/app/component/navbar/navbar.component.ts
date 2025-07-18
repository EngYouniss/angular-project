import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Iproducts } from '../../modules/iproducts';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  isLogged: boolean = false;
  allCartProducts: Iproducts[] = [];

  constructor(
    private _cartService: CartService,
    private _AuthService: AuthService
  ) {}

  ngOnInit(): void {
    this._AuthService.getAuthObservable().subscribe({
      next: (status) => this.isLogged = status
    });

    this.getAllCart();
  }

  getAllCart(): void {
    this._cartService.getAllCart().subscribe(prod => this.allCartProducts = prod);
  }

  getUserStatus(): boolean {
    return !!this._AuthService.getUserStatus(); 
  }

  login(): void {
    this._AuthService.login();
  }

  logout(): void {
    this._AuthService.logout();
  }
  increaseQuantity(prod: Iproducts): void {
  prod.quantity = (prod.quantity || 1) + 1;
}

decreaseQuantity(prod: Iproducts): void {
  if (prod.quantity && prod.quantity > 1) {
    prod.quantity--;
  }
}

removeFromCart(prod: Iproducts): void {
  const index = this.allCartProducts.findIndex(p => p.id === prod.id);
  if (index !== -1) {
    this.allCartProducts.splice(index, 1);
  }
}

getTotalPrice(): number {
  return this.allCartProducts.reduce((total, item) =>
    total + (item.price * (item.quantity || 1)), 0);
}

}
