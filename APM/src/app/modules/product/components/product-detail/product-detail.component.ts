// components
import { Component, OnInit } from '@angular/core';

// services
import { ActivatedRoute }    from '@angular/router';
import { Router }            from '@angular/router';
import { ProductService }    from '../../../../services/product.service';

// interfaces
import { Product }           from '../../../../interfaces/product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  errorMessage = '';
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {}

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');

    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

  onBack() {
    this.router.navigate(['/products']);
  }
}
