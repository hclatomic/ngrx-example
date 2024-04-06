import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreService } from './store.service';
import { Item } from '../catalog/model/catalog.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    public store: StoreService
  ) { }

  getCatalog() {
    this.http.get<Item[]>('https://5d0e3cd1eba6ef0014561072.mockapi.io/articles').subscribe((res: Item[]) => {
      this.store.appState.catalog = res;
    });
  }

}
