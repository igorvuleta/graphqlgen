import { Component, OnInit } from '@angular/core';
import Order from './order';
import { QueryRef, Apollo } from 'apollo-angular';
import { ActivatedRoute } from '@angular/router';
import gql from 'graphql-tag';


export const FindOrderPerId = gql`
  query FindOrderPerId($id: ID!) {
    order(id: $id) {
      orderId
      orderDate
      requiredDate
      shippedDate
      shipName
      shipAddress
      shipCity
      shipCountry
      shipPostalCode
    }
  }
`;
@Component({
  selector: 'app-ordersdetail',
  templateUrl: './ordersdetail.component.html',
  styleUrls: ['./ordersdetail.component.css']
})
export class OrdersdetailComponent implements OnInit {
  order: Order = {
    orderId:'',
    orderDate:'',
    requiredDate:'',
    shippedDate:'',
    shipName:'',
    shipAddress:'',
    shipCity:'',
    shipCountry:'',
    shipPostalCode:''
  }

  private query: QueryRef<any>;
  constructor(private apollo: Apollo, private router: ActivatedRoute) { }

  ngOnInit() {
    this.getDetails();
  }
  getDetails() {
    const id: string = this.router.snapshot.params.id;
   this.query = this.apollo.watchQuery({
     query: FindOrderPerId,
     variables : {id: id}

   });
   this.query.valueChanges.subscribe(res => {
    this.order = res.data.order;
  })
}

}
