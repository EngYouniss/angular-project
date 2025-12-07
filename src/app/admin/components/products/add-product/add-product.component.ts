import { Component, ElementRef, Input, input, ViewChild } from '@angular/core';
import { IdummyProducts, Iproduct } from '../../../modules/iproduct';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';
import { ICategor } from '../../../modules/icategor';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment.development';
import { ProductsService } from '../../../services/products.service';
import { ModalCardComponent } from "../../../shared/modal-card/modal-card.component";

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, ModalCardComponent],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent  {
  form!: FormGroup;
  selectedFile:File|null=null;
  preview:string|ArrayBuffer|null=null;

  constructor(private _productService: ProductsService, private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      title: [''],
      description: [''],
      price: [],
      image:this.selectedFile

    })
  }

onFileSelected(event:Event){

  const input=event.target as HTMLInputElement;

  if(input.files&&input.files[0]){
    const file =input.files[0];

    const reader=new FileReader();

    reader.onload=()=>{
      this.preview=reader.result;
    }
    reader.readAsDataURL(file);
  }
}


 addProduct() {
  if (this.form.valid) {
const formData=new FormData()
formData.append('title',this.form.value.title);
formData.append('description',this.form.value.description);
formData.append('price',this.form.value.price);
if(this.selectedFile){
  formData.append('image',this.selectedFile);
}

this._productService.addProducts(formData).subscribe({
  next:(res)=>console.log('success'),
  error:(err)=>console.log('there is an error')
})
// this._productService.addProducts(productData).subscribe({
    //   next: (res) => {
    //     console.log(' Product added successfully:', res);
    //     this.form.reset();
    //   },
    //   error: (err) => {
    //     console.error(' Error adding product:', err);
    //   }
    // });
  }
}




}
