import { Component } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { ApiService } from 'src/app/services/api.service';

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
