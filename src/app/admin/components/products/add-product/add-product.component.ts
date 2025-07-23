import { Component } from '@angular/core';
import { Iproduct } from '../../../modules/iproduct';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  constructor(private _productService: ProductService) {
    this._productService.loadProducts().subscribe((data) => {
      this.products = data
    })
  }
  products: Iproduct[] = []
  product: Iproduct = {} as Iproduct;

 addProduct(product: Iproduct) {
  this._productService.addProduct(product).subscribe(() => {
    this._productService.loadProducts().subscribe((data) => {
      this.products = data
    })
  });
}

}
