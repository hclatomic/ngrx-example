import { Injectable } from '@angular/core';
import { Item } from "../model/catalog.model";
import { StoreService } from '../../services/store.service';
import { CartItem } from '../../cart/model/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(public ngstore: StoreService) { }

  addToCart(item: Item): void {
    const present = this.ngstore.appState.cart.list.filter(it => it.id === item.id)[0];
    if (!present) {
      this.ngstore.appState.cart.list.push({
        id: item.id,
        numberOfItems: 1,
        item: item
      });
    }
    else {
      present.numberOfItems++;
    }
    this.calcTotal();
  }

  updateCart(action: string, cartitem: CartItem) {
    if (action === 'increase') {
      const present: CartItem = this.ngstore.appState.cart.list.filter(item => item.id === cartitem.id)[0];
      present.numberOfItems++;
    }
    else if (action === 'decrease') {
      const present: CartItem = this.ngstore.appState.cart.list.filter(item => item.id === cartitem.id)[0];
      if (present) {
        if (present.numberOfItems > 1) {
          present.numberOfItems--;
        }
        else {
          const idx = this.ngstore.appState.cart.list.findIndex(item => item.id === cartitem.id);
          this.ngstore.appState.cart.list.splice(idx, 1);
        }
      }
    }
    else if (action === 'delete') {
      const idx = this.ngstore.appState.cart.list.findIndex(item => item.id === cartitem.id);
      this.ngstore.appState.cart.list.splice(idx, 1);
    }
    this.calcTotal();
  }

  calcTotal() {
    this.ngstore.appState.cart.cartTotalPrice = 0;
    let total = 0;
    this.ngstore.appState.cart.list.map((cartitem: CartItem) => {
      this.ngstore.appState.cart.cartTotalPrice += cartitem.item.price * cartitem.numberOfItems;
      total += cartitem.numberOfItems;
    });
    this.ngstore.appState.cart.numberOfCartItems = total;
  }

}
