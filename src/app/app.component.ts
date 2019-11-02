import { Component } from '@angular/core';

import { Pizza } from '../models/Pizza';
import { OrderItem } from '../models/OrderItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  orderList: OrderItem[];

  constructor() {
    this.orderList = [];

    this.addToOrder = this.addToOrder.bind(this);
    this.handleSubmitOrder = this.handleSubmitOrder.bind(this);
    this.handleRemoveOrderItem = this.handleRemoveOrderItem.bind(this);
  }

  addToOrder(pizza: Pizza) {
    // limit order items as per requirements
    if (this.orderList.length === 6) {
      alert(`You can't buy more than 6 different pizzas at once`);
      return;
    }

    let found = false;
    let orderList = this.orderList.map((orderItem: OrderItem) => {
      // if item already exists, just increment the count
      if (orderItem.pizza.id === pizza.id) {
        found = true;
        return {
          ...orderItem,
          count: orderItem.count + 1,
        };
      }
      // else just return the item
      return orderItem;
    });

    if (!found) {
      const orderItem: OrderItem = {
        id: String(pizza.id), // could use uuid here as well
        count: 1,
        pizza,
      };

      orderList = [...orderList, orderItem];
    }

    this.orderList = orderList;
  }

  handleRemoveOrderItem(orderItemId: string) {
    this.orderList = this.orderList.filter(oi => oi.id !== orderItemId);
  }

  handleSubmitOrder() {
    alert('Submitting order...');
    // do some work, send to API, yada yada...
    this.orderList = [];
  }
}
