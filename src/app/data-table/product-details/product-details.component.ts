import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
import { ActivatedRoute } from "@angular/router";
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'apollo-link';


const FindProductById = gql`
  query FindProductById($id: ID!) {
    product(id: $id) {
      productId
      productName
      unitPrice
      unitsInStock
      unitsOnOrder
      quantityPerUnit
      discontinued
    }
  }
`;
@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product: Product = {
    productId: null,
    productName: "",
    unitPrice: null,
    unitsInStock: null,
    unitsOnOrder: null,
    quantityPerUnit: null,
    discontinued: null
  };
  private query: QueryRef<any>;
  
  constructor(
    private route: ActivatedRoute,
    private apollo: Apollo
    
  ) {}

  ngOnInit() {
    
    this.getDetails();
  }

  getDetails() {
   const id: string = this.route.snapshot.params.id;
   this.query = this.apollo.watchQuery({
     query: FindProductById,
     variables : {id: id}

   });

   this.query.valueChanges.subscribe(res => {
     this.product = res.data.product;
     console.log(this.product);
   })
   
   

 
   
   };
}
