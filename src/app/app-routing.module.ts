import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/HomePage/homepage.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { ProductGridComponent } from 'src/components/product-grid/product-grid.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';

const routes: Routes = [
  {
    title: 'Home',
    path: '',
    component: HomepageComponent,
  },
  
  {
    title: 'Single Product',
    path: 'products/:id',
    component: SingleProductComponent,
  },

  {
    title: 'All Products',
    path: 'products',
    component: ProductGridComponent,
  },
  {
    title: 'Registration Page',
    path: 'register',
    component: RegisterUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
