import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetOrdersGQL } from './../../generated/graphql';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Observable<any[]>;
  displayedColumns: string[] = ['ID', 'Ship Name','Order Date','Required Date', 'Details'];
  constructor(private getOrdersGQL: GetOrdersGQL, private router: Router) { }

  ngOnInit() {
    this.orders = this.getOrdersGQL.watch().valueChanges.pipe(map(orders => orders.data.orders))
  }
  public redirectToDetails = (orderId: string) => {
    let url: string = `/orders/details/${orderId}`;
    this.router.navigate([url]);
    console.log("did I navigate?");
  };

}
