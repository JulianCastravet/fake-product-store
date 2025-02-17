import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/models/Product.model';
import { ProductComponent } from '../product/product.component';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/services/productService/product.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
  standalone: true,
  imports: [ProductComponent, CommonModule],
})
export class ProductGridComponent implements OnInit {

  private readonly unsubscribe$ = new Subject<null>()
  products: Product[] = [];

  constructor(
    private readonly productService: ProductService
  ){}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAllProducts().pipe(takeUntil(this.unsubscribe$)).subscribe(products => this.products = products);
  }

  addItemToCart(id:number){
    window.alert(id);
  }
}
