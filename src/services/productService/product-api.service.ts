import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/models/Product.model';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiURL}/Products`);
  }

  getSingleProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.apiURL}/Products/${id}`);
  }

  getMostRatedProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.apiURL}/Products/MostRated`)
  }
}
