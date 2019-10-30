import { Component, OnInit } from '@angular/core';

import { Pizza } from '../../models/Pizza';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  pizzas: Pizza[] = [
    { id: 1, name: 'Margarita', price: 15.00 },
    { id: 2, name: 'Peperoni', price: 15.50 },
    { id: 3, name: 'Hawaian', price: 999.99 },
    { id: 4, name: 'Formagi', price: 0.15 },
    { id: 5, name: 'Margarita 2', price: 20.00 },
    { id: 6, name: 'Margarita 3', price: 17.45 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
