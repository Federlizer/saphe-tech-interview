import { Component } from '@angular/core';

import { Pizza } from '../models/Pizza';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  orderList: Pizza[];

  constructor() {
    this.orderList = [];

    this.addToOrder = this.addToOrder.bind(this);
  }

  addToOrder(pizza: Pizza) {
    this.orderList = [...this.orderList, pizza];
  }
}
