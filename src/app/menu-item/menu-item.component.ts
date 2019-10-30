import { Component, Input, OnInit } from '@angular/core';

import { Pizza } from '../../models/Pizza';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() pizza: Pizza;

  constructor() { }

  ngOnInit() {
  }

}
