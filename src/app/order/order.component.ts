import {
  Component,
  Input,

  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { Pizza } from '../../models/Pizza';
import { OrderItem } from '../../models/OrderItem';

import { currencyFormat } from '../../utils/currencyFormat';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnChanges {
  @Input() orderList: OrderItem[];
  @Input() onSubmitOrder: () => void;
  @Input() onRemoveOrderItem: (orderItemId: string) => void;
  totalPriceStr: string = currencyFormat.format(0);

  ngOnChanges(changes: SimpleChanges) {
    const orderList = changes.orderList.currentValue;
    const totalPrice = orderList
      .reduce((acc: number, curr: OrderItem) => {
        return acc + (curr.count * curr.pizza.price);
      }, 0);

    this.totalPriceStr = currencyFormat.format(totalPrice);
  }
}
