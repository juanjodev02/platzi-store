import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Product } from '../../../product.model';

import { ProductsService } from '../../../core/services/product/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public product: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      const product = this.productsService.getProduct(id);
      if(!product) {
        this.router.navigate(['/products']);
      }
      this.product = product as Product;
    });
  }

}
