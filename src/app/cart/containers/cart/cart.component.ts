import { Component, EventEmitter, Output } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Output() closeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    public ngstore: StoreService
  ) { }

  closeCart() {
    this.closeEvent.emit(true);
  }
}
