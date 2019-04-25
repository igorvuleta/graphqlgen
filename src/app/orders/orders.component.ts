import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetOrdersGQL } from './../../generated/graphql';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Observable<any[]>;
  displayedColumns: string[] = ['ID', 'Ship Name','Order Date','Required Date', 'Details'];
  constructor(private getOrdersGQL: GetOrdersGQL) { }

  ngOnInit() {
    this.orders = this.getOrdersGQL.watch().valueChanges.pipe(map(orders => orders.data.orders))
  }

}
