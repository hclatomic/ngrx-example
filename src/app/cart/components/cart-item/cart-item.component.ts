import { Component, Input } from '@angular/core';
import { CatalogService } from '../../../catalog/services/catalog.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  @Input() cartItem: any | undefined;

  constructor(
    public catService: CatalogService
  ) { }


}
