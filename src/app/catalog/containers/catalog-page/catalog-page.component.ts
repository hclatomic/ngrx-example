import { Component } from '@angular/core';
import { StoreService } from '../../..//services/store.service';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent {

  constructor(
    public ngstore: StoreService,
    private api: ApiService
  ) {
    this.api.getCatalog();
  }
}
