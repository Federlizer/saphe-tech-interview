import { Component, Input, OnInit } from '@angular/core';

import { Pizza } from '../../models/Pizza';

@Component({
  selector: 'app-pizza-modal',
  templateUrl: './pizza-modal.component.html',
  styleUrls: ['./pizza-modal.component.css']
})
export class PizzaModalComponent implements OnInit {
  @Input() pizza: Pizza;
  @Input() onClose: () => void;
  @Input() onOrder: (pizzaId: number) => void;

  constructor() {}
  ngOnInit() {}

  handleClose() {
    this.onClose();
  }

  handleOrder() {
    this.onOrder(this.pizza.id);
  }

  // there must be a better way to do this...
  stopBubbling(e) {
    e.stopPropagation();
  }
}
