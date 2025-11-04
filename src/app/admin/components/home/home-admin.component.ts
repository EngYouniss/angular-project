import { Component, OnInit } from '@angular/core';
import { AddProductComponent } from "../products/add-product/add-product.component";
import { RouterModule } from "@angular/router";
import { ProductsService } from '../../services/products.service';
import { IdummyProducts } from '../../modules/iproduct';
import { DummyProductsComponent } from "../products/dummy-products/dummy-products.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, DummyProductsComponent],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.scss'
})
export class HomeAdminComponent implements OnInit {
  produc!: IdummyProducts[];
  constructor(private _productsService: ProductsService) { }
  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this._productsService.products$.subscribe(
      {
        next: (res) => {
          this.produc = res;
          console.log(res);
        }
      })
  }
}
