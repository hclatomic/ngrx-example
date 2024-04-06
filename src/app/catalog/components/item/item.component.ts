import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from "../../model/catalog.model";
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: []
})
export class ItemComponent {

  @Input() item!: Item;

  constructor(
    public catService: CatalogService
  ) { }

}
