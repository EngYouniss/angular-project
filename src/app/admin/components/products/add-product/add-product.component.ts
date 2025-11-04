import { Component, Input } from '@angular/core';
import { IdummyProducts, Iproduct } from '../../../modules/iproduct';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';
import { ICategor } from '../../../modules/icategor';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment.development';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  form!: FormGroup;
  constructor(private _productService: ProductsService, private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      title: [''],
      description: [''],
      price: [],

    })
  }



 addProduct() {
  if (this.form.valid) {
    const productData = this.form.value;

    this._productService.addProducts(productData).subscribe({
      next: (res) => {
        console.log('✅ Product added successfully:', res);
        this.form.reset(); // تنظيف الفورم بعد الإضافة
      },
      error: (err) => {
        console.error('❌ Error adding product:', err);
      }
    });
  }
}




}
