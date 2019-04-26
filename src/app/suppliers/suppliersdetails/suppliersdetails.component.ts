import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Supplier from './supplier';
import { QueryRef, Apollo } from 'apollo-angular';
import gql from 'graphql-tag';


export const FindSupplierPerId = gql`
  query FindSupplierPerId($id: ID!) {
    supplier(id: $id) {
      supplierId
      companyName
      contactName
      contactTitle
      address
      city
      country
      postalCode
      fax
      phone
      homePage
    }
  }
`;
@Component({
  selector: 'app-suppliersdetails',
  templateUrl: './suppliersdetails.component.html',
  styleUrls: ['./suppliersdetails.component.css']
})
export class SuppliersdetailsComponent implements OnInit {

  supplier: Supplier = {
    supplierId:'',
    companyName:'',
    contactName:'',
    contactTitle:'',
    address:'',
    city:'',
    country:'',
    postalCode:'',
    fax:'',
    phone:'',
    homePage:''
  }
  private query: QueryRef<any>;
  constructor(private router: ActivatedRoute, private apollo: Apollo) { }

  ngOnInit() {
    this.getDetails();
  }
  getDetails(){
    const id: string = this.router.snapshot.params.id;
    this.query = this.apollo.watchQuery({
      query: FindSupplierPerId,
      variables: {id: id}
    });

    this.query.valueChanges.subscribe(res => {
      this.supplier = res.data.supplier;
    })
  }


}

