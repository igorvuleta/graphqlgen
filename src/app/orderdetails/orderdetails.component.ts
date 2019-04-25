import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { GetOrderDetailsGQL } from "./../../generated/graphql";
import { map } from "rxjs/operators";

@Component({
  selector: "app-orderdetails",
  templateUrl: "./orderdetails.component.html",
  styleUrls: ["./orderdetails.component.css"]
})
export class OrderdetailsComponent implements OnInit {
  orderDetails: Observable<any[]>;
  displayedColumns: string[] = ['ID', 'Discount','Quantity','Unit Price', 'Details'];

  constructor(private getOrderDetailsGQL: GetOrderDetailsGQL) {}

  ngOnInit() {
    this.orderDetails = this.getOrderDetailsGQL
      .watch()
      .valueChanges.pipe(map(orderDetails => orderDetails.data.orderDetails));
  }
}
