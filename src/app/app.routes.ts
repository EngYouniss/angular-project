import { Routes } from '@angular/router';
import { HomeAdminComponent } from './admin/components/home/home-admin.component';
import { CategoriesComponent } from './client/components/categories/categories.component';
import { AllProductsComponent } from './client/components/all-products/all-products.component';
import { LoginComponent } from './client/login/login.component';
// import { authGuard } from './client/guards/auth.guard';
import { ProductDetailsComponent } from './client/components/product-details/product-details.component';
import { MainLayoutComponent } from './admin/layout/main-layout/main-layout.component';
import { AddProductComponent } from './admin/components/products/add-product/add-product.component';
import { NotFoundComponent } from './admin/components/not-found/not-found.component';
import { HomeComponent } from './client/layout/main-layout/main-layout.component';
import { AddCategoryComponent } from './admin/components/Categories/add-category/add-category.component';
import { AboutComponent } from './client/components/about/about.component';
import { ProductsByCategoryComponent } from './client/components/products-by-category/products-by-category.component';
import { UsersComponent } from './admin/components/users/users.component';
import { RegisterComponent } from './client/components/register/register.component';

export const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
  { path: 'prodCat', component: ProductsByCategoryComponent },
  {

    path: '', component: HomeComponent, children: [
      {
  path: 'product',
  loadComponent: () =>
    import('./client/components/all-products/all-products.component')
      .then(c => c.AllProductsComponent)
},

{ path: 'category', component: CategoriesComponent },
{ path: 'about', component: AboutComponent }
    ]

  },

{
  path: 'admin', component: MainLayoutComponent, children: [
    {
      path: '', component: HomeAdminComponent

    },
    
    {
      path: 'addproduct', component: AddProductComponent
    },
    {
      path: 'add-category', component: AddCategoryComponent
    },
    {
      path: 'users', component: UsersComponent
    }


  ]
},
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: '**', component: NotFoundComponent },

];
