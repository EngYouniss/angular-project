import { Component, inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ICategor } from '../../../modules/icategor';
import {   FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { last } from 'rxjs';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent {
  private fBuilder=inject(FormBuilder)
  categories: ICategor[] = [];
  errorMessage: string = '';
  constructor(private _productService: ProductService) {
    this._productService.getCategories().subscribe(
      {
        next: (data) => this.categories = data
      }
    )
  }
  CategoryForm=this.fBuilder.group({
    name: ['',Validators.required],
    description:this.fBuilder.array([
      this.fBuilder.control('')
    ])

  })

  addCategory(): void {
  if (this.CategoryForm.valid) {
    const category: ICategor = {
      name: this.CategoryForm.value.name || '',
      description: (this.CategoryForm.value.description || []).join(',')
    };

    this._productService.addCategory(category).subscribe({
      next: () => {
        console.log('تمت الإضافة بنجاح');
        this.CategoryForm.reset(); // إعادة ضبط النموذج
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'حدث خطأ أثناء الإضافة';
      }
    });
  }
}


get  name(){
    return this.CategoryForm.get('name');
  }

  get description(){
    return this.CategoryForm.get('description') as FormArray;
  }
  addform(){
this.description.push(this.fBuilder.control(''));
  }
}
