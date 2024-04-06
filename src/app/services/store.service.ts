import { Injectable } from '@angular/core';
import { Item } from '../catalog/model/catalog.model';
import { CartItem } from '../cart/model/cart-item.model';

interface AppState {
  catalog: Item[],
  cart: {
    list: CartItem[];
    cartTotalPrice: number,
    numberOfCartItems: number;
  };
}
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  appState: AppState = {
    catalog: [],
    cart: {
      list: [],
      cartTotalPrice: 0,
      numberOfCartItems: 0
    }
  };
  constructor() { }
}
