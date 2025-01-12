import { Component, Input } from '@angular/core';
import { Product } from 'src/models/Product.model';
import { ProductComponent } from '../product/product.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
  standalone: true,
  imports: [ProductComponent, CommonModule],
})
export class ProductGridComponent {
  @Input() products!: Product[];

  constructor(private router: Router) {}

  viewProduct(id: number) {
    this.router.navigate(['/products', id]);
  }
}
