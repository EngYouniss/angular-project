import { Routes } from '@angular/router';
import { HomeComponent } from './client/layout/main-layout/main-layout.component';
import { CategoriesComponent } from './client/components/categories/categories.component';
import { AllProductsComponent } from './client/components/all-products/all-products.component';
import { LoginComponent } from './client/login/login.component';
// import { authGuard } from './client/guards/auth.guard';
import { ProductDetailsComponent } from './client/components/product-details/product-details.component';
import { MainLayoutComponent } from './admin/layout/main-layout/main-layout.component';
import { AddProductComponent } from './admin/components/products/add-product/add-product.component';

export const routes: Routes = [
      { path: 'home', component: HomeComponent },
  {

    path: '', component: HomeComponent, children: [
      { path: 'product', component: AllProductsComponent },
      { path: 'category', component: CategoriesComponent },
      { path: 'product/:id', component: ProductDetailsComponent },
    ]

  },
        { path: 'login', component: LoginComponent },

  {
    path: 'admin', component: MainLayoutComponent, children: [
      {
        path: 'addproduct', component: AddProductComponent
      },
            {path:'**',redirectTo:'product',pathMatch:'full'},

    ]
  }
];
