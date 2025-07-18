import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { AllProductsComponent } from './component/all-products/all-products.component';
import { LoginComponent } from './component/login/login.component';
import { authGuard } from './guards/auth.guard';
import { UsersComponent } from './component/users/users.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: AllProductsComponent, canActivate: [authGuard] },
  { path: 'category', component: CategoriesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UsersComponent },
  { path: 'product/:id', component: ProductDetailsComponent }
];
