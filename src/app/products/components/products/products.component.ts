import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/services/product/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor( private productService: ProductsService) { }

  public products: Product[] = [];

  ngOnInit(): void {
      this.products = this.productService.getAllProducts();
  }

  printToConsole(id: string): void {
    console.log(id);
  }

}
