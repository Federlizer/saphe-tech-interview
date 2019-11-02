import {
  Component,
  Input,

  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { Pizza } from '../../models/Pizza';

const currencyFormat = Intl.NumberFormat('dk-DK', {
  style: 'currency',
  currency: 'DKK',
});

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnChanges {
  @Input() orderList: Pizza[];
  totalPriceStr: string;

  constructor() {
    this.totalPriceStr = currencyFormat.format(0);
  }

  ngOnChanges(changes: SimpleChanges) {
    const orderList = changes.orderList.currentValue;
    const totalPrice = this.orderList
      .reduce((acc: number, curr: Pizza) => acc + curr.price, 0);

    this.totalPriceStr = currencyFormat.format(totalPrice);
  }

  handleOrder() {
    alert('You ordered...');
  }
}
