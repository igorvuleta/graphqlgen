import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { QueryRef } from 'apollo-angular';
import { Apollo } from 'apollo-angular';
import {  ActivatedRoute } from '@angular/router';
import gql from 'graphql-tag';

export const FindCustomerPerId = gql`
  query FindCustomerPerId($id: ID!) {
    customer(id: $id) {
      address
      city
      companyName
      contactTitle
      country
      customerId
      fax
      phone
      postalCode
      customerId
      region
    }
  }
`;

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.css']
})
export class CustomerdetailComponent implements OnInit {

  customer: Customer = {
    address:'',
    city:'',
    contactTitle:'',
    companyName:'',
    country:'',
    fax:'',
    region:'',
    phone:'',
    customerId:'',
    contactName:'',
    postalCode:''
  }
  private query: QueryRef<any>;

  constructor(private apollo: Apollo, private router: ActivatedRoute) { }

  ngOnInit() {
    this.getDetails();
  }

  getDetails(){
    const id: string = this.router.snapshot.params.id;
    this.query = this.apollo.watchQuery({
      query: FindCustomerPerId,
      variables : {id: id}
 
    });
 
    this.query.valueChanges.subscribe(res => {
      this.customer = res.data.customer;
    })
  }

}
