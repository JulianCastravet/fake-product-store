import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { ProductGridComponent } from 'src/components/product-grid/product-grid.component';
import { Product } from 'src/models/Product.model';
import { ProductService } from 'src/services/productService/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  standalone: true,
  imports: [ProductGridComponent],
})
export class HomepageComponent implements OnInit {
  public products: Product[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getAllProducts()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((products) => (this.products = products));
  }
}
