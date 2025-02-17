import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { Product } from 'src/models/Product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [MatCardModule, CurrencyPipe],
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;
  @Output() addProductToCart = new EventEmitter();

  constructor(private readonly router: Router) {}

  public getShortedDescription(text: string): string {
    return !text ? '' : text.split(' ', 5).join(' ').concat('...');
  }

  viewProduct(id: number) {
    this.router.navigate(['/products', id]);
  }

  public addToCart(event: MouseEvent) {
    event?.stopPropagation();
    this.addProductToCart.emit(event);
  }
}
