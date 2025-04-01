import { Component } from '@angular/core';
import { ProductCards } from 'src/app/interface';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  public cart: ProductCards[] = [];

  public onItemAdded(item: ProductCards) {
    this.cart.push(item);
    console.log('Cart updated:', this.cart);
  }
}
