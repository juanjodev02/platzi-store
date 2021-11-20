import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  DoCheck,
  OnDestroy
} from "@angular/core";
import { Product } from "../../../product.model";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  constructor() {
    console.log("Product component constructor");
  }

  ngOnInit() {
    console.log("Product component init");
  }

  ngDoCheck() {
    console.log('Product component do check');
  }

  ngOnDestroy(): void {
    console.log('Product component destroy');
  }

  @Input()
  product: Product;

  @Output()
  productClicked: EventEmitter<string> = new EventEmitter();

  today = new Date();

  addToCart() {
    console.log('Add to cart')
    this.productClicked.emit(this.product.id);
  }
}