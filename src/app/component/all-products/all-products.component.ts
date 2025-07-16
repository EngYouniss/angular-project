import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IallProducts } from '../../modules/iall-products';
import { CommonModule, Location } from '@angular/common';
import { ICategories } from '../../modules/icategories';
import { FormsModule } from '@angular/forms';
import { StaticProductServiceService } from '../../services/static-product-service.service';
import { CartService } from '../../services/cart.service';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent implements OnInit {
  selectedCat: number = 0;
  constructor(private _StaticProductServiceService: StaticProductServiceService,
     private _CartService: CartService,
    private _Location:Location) {

  }
  filteredProducts: IallProducts[] = [];
  categories: ICategories[] = [];
  ngOnInit(): void {
    this.categories = this._StaticProductServiceService.categories;
    this.applyFilter();
  }

  applyFilter(): void {
    this._StaticProductServiceService.applyFilter(this.selectedCat);
    this.filteredProducts = this._StaticProductServiceService.filteredProducts;
  }


  @ViewChildren('ColorD') colord!: QueryList<ElementRef>;
  changecol(index: number): void {
    this.colord.toArray()[index].nativeElement.style.backgroundColor = 'red';
  }

  addToCart(product: IallProducts): void {

    this._CartService.addToCart(product);
    console.log(product);
  }
  goBack(): void {
    this._Location.back();
  }

  @ViewChild('search') searchIn!:ElementRef;

  ngAfterViewInit():void{
    this.searchIn.nativeElement.focus();
  }
}
