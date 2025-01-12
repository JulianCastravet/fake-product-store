import { Injectable } from '@angular/core';
import { ProductApiService } from './product-api.service';
import { Observable } from 'rxjs';
import { Product } from 'src/models/Product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private productAPI: ProductApiService) {}

  getAllProducts(): Observable<Product[]> {
    return this.productAPI.getAllProducts();
  }

  getProductById(id: number): Observable<Product> {
    return this.productAPI.getSingleProduct(id);
  }
}
