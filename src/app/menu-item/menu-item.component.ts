import { Component, Input, OnInit } from '@angular/core';

import { Pizza } from '../../models/Pizza';
import { currencyFormat } from '../../utils/currencyFormat';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() pizza: Pizza;
  @Input() openModal: (id: number) => void;
  price: string;

  ngOnInit() {
    this.price = currencyFormat.format(this.pizza.price);
  }

  handleClick(e) {
    this.openModal(this.pizza.id);
  }
}
