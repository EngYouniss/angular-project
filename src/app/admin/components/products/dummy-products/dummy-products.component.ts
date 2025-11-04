import { Component, Input } from '@angular/core';
import { IdummyProducts } from '../../../modules/iproduct';
import { NgFor } from '@angular/common';
import { AddProductComponent } from '../add-product/add-product.component';
@Component({
  selector: 'app-dummy-products',
  standalone: true,
  imports: [NgFor,AddProductComponent],
  templateUrl: './dummy-products.component.html',
  styleUrl: './dummy-products.component.scss'
})
export class DummyProductsComponent {
 @Input() dummyProduct!:IdummyProducts[];
}
