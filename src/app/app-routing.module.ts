import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/HomePage/homepage.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
