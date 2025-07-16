import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { AllProductsComponent } from './component/all-products/all-products.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'product',component:AllProductsComponent},
    {path:'category',component:CategoriesComponent},
];
