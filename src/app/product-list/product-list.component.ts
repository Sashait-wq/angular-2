import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { ProductCards } from 'src/app/interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnDestroy {
  public productList: ProductCards[] = [
    { name: 'Phone', price: 699 },
    { name: 'Laptop', price: 999 },
  ];

  @Output() itemAdded = new EventEmitter<ProductCards>();

  public addToCart(item: ProductCards) {
    this.itemAdded.emit(item);
  }

  public ngOnDestroy() {
    console.log('ProductListComponent destroyed');
    this.itemAdded.complete();
  }
}
