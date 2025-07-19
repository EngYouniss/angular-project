import { Routes } from '@angular/router';
import { HomeComponent } from './client/layout/main-layout/main-layout.component';
import { CategoriesComponent } from './client/components/categories/categories.component';
import { AllProductsComponent } from './client/components/all-products/all-products.component';
import { LoginComponent } from './client/login/login.component';
import { authGuard } from './client/guards/auth.guard';
import { ProductDetailsComponent } from './client/components/product-details/product-details.component';
import { MainLayoutComponent } from './admin/layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'product', component: AllProductsComponent, canActivate: [authGuard] },
      { path: 'category', component: CategoriesComponent },
      { path: 'login', component: LoginComponent },
      { path: 'product/:id', component: ProductDetailsComponent },
    ]
  },

  {
    path: 'admin', component: MainLayoutComponent, children: [
      {
        path: '', component: MainLayoutComponent
      },
    ]
  }
];
