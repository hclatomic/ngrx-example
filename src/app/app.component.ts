import { Component } from '@angular/core';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-example-transformed';
  infoText = '🔎 Blog Post: Why is NgRx used in Angular apps?';

  constructor(
    public ngstore: StoreService
  ) { }

}
