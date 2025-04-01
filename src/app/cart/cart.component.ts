import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ProductCards } from 'src/app/interface';
@Component({
  selector: 'app-cart',
  template: `
    <h2>Your Cart</h2>
    <div *ngIf="cartItems.length > 0; else emptyCart">
      <ul>
        <li *ngFor="let item of cartItems">
          {{ item.name }} - {{ item.price }} $
        </li>
      </ul>
    </div>
    <button id="remove-btn" (click)="removeCartItems()">Remove</button>
    <ng-template #emptyCart>
      <p>The cart is empty.</p>
    </ng-template>
  `,
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnChanges {
  @Input() cartItems: ProductCards[] = [];

  public ngOnInit() {
    this.cartItems;
    console.log('CartComponent initialized');
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes['cartItems']) {
      console.log('Cart items updated:', this.cartItems);
    }
  }

  public removeCartItems() {
    this.cartItems.pop();
  }
}
