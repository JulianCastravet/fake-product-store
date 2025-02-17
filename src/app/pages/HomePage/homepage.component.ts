import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Subject, takeUntil } from 'rxjs';
import { Product } from 'src/models/Product.model';
import { ProductService } from 'src/services/productService/product.service';
import { ProductComponent } from "../../../components/product/product.component";
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  standalone: true,
  imports: [ ProductComponent, NgFor],
})
export class HomepageComponent implements OnInit {
  public products: Product[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(private productService: ProductService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.productService
      .getMostRatedProducts()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((products) => (this.products = products));
  }


  public addToCart(id:number){
    window.alert(`from homepage ${id}`);
  }

  public goToProductsPage():void {
    this.router.navigate(['/products/'])
  }
}
