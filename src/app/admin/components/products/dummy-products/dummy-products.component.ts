import { Component, Input } from '@angular/core';
import { IdummyProducts } from '../../../modules/iproduct';
import { NgFor, NgIf } from '@angular/common';
import { AddProductComponent } from '../add-product/add-product.component';
import { ProductsService } from '../../../services/products.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-dummy-products',
  standalone: true,
  imports: [NgFor, AddProductComponent, ReactiveFormsModule, NgIf],
  templateUrl: './dummy-products.component.html',
  styleUrl: './dummy-products.component.scss'
})
export class DummyProductsComponent {

  form!: FormGroup;
  selectedFile: File | null = null;
  selectedProductId!:number;
  preview: string | ArrayBuffer | null = null;
  @Input() dummyProduct!: IdummyProducts[];
  constructor(private _productsService: ProductsService, private _formBuilder: FormBuilder) {
   this.form= this._formBuilder.group(
      {
        title: [''],
        description: [''],
        price: [''],

      }
    )
  }

  deleteProduct(id: number) {
    this._productsService.DeleteProduct(id).subscribe(
      {
        next: (res) => {
          console.log('deleted successfully', res);
          this.dummyProduct = this.dummyProduct.filter(p => p.id !== id);

        }
      }
    );
  }
  onFileSelected(event: Event) {

    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];

      const reader = new FileReader();

      reader.onload = () => {
        this.preview = reader.result;
      }
      reader.readAsDataURL(file);
    }
  }

  openEditModal(product: any) {
  this.selectedProductId = product.id;
  this.form.patchValue({
    title: product.title,
    price: product.price,
    description: product.description
  });
  this.preview = product.image; // show image preview
}
  updateProduct() {
    const data=this.form.value;
    this._productsService.UpdateProduct(
      this.selectedProductId,data
    ).subscribe(
      {
        next:(res)=>{
          console.log('updated',res);

        }
      }
    )
  }
}
