import { Component, OnInit } from '@angular/core';

import { Pizza } from '../../models/Pizza';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // the pizza that'll be shown when the modal (pop-up window) is open
  modalPizza: Pizza;
  pizzas: Pizza[];
  order: Pizza[];

  constructor() {
    this.modalPizza = null;
    this.order = [];
    this.pizzas = [
      { id: 1, name: 'Margarita', price: 15.00 },
      { id: 2, name: 'Peperoni', price: 15.50 },
      { id: 3, name: 'Hawaian', price: 999.99 },
      { id: 4, name: 'Formagi', price: 0.15 },
      { id: 5, name: 'Margarita 2', price: 20.00 },
      { id: 6, name: 'Margarita 3', price: 17.45 },
    ];


    // TODO: remove
    this.modalPizza = this.pizzas[0];

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
  }

  ngOnInit() {}

  openModal(pizzaId) {
    this.modalPizza = this.pizzas.find(p => p.id === pizzaId);
  }

  closeModal() {
    this.modalPizza = null;
  }

  handleOrder(pizzaId) {
    const pizza = this.pizzas.find(p => p.id === pizzaId);
    this.order = [...this.order, pizza];
  }
}
