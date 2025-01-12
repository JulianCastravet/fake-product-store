import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Product } from 'src/models/Product.model';
import { UserComment } from 'src/models/UserComment.model';
import { CommentService } from 'src/services/commentsService/comments.service';
import { ProductService } from 'src/services/productService/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  private unsubscribe$ = new Subject<void>();
  public product: Product | undefined;
  public commentaries!: UserComment[];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  private getProduct() {
    const prodId = Number(this.route.snapshot.paramMap.get('id'));
    if (!prodId) return;
    this.productService
      .getProductById(prodId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((product) => {
        this.product = product;
        this.getCommentaries(prodId);
      });
  }

  private getCommentaries(limit: number) {
    this.commentService
      .getLimitedComments(limit)
      .subscribe((comments) => console.log(comments));
  }

  public AddProductToCart(id: number | undefined): void {
    if (!id) return;
    alert(`Product with id ${id} added to your cart!`);
  }
}
