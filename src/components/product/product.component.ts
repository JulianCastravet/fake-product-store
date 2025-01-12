import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Product } from 'src/models/Product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [MatCardModule],
})
export class ProductComponent {
  @Input({ required: true }) product: Product | undefined;
}
