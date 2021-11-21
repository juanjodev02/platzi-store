import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './components/product/product.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    MaterialModule
  ]
})
export class ProductsModule { }
