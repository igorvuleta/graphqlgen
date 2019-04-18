import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Apollo, QueryRef } from 'apollo-angular';
import { GetanythingbyidGQL } from './../../../generated/graphql';
import { GetanythingbyidGQL } from 'src/generated/graphql';
import { Subscription } from 'rxjs';



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

  private querySubscription: Subscription;
  constructor(
    private route: ActivatedRoute,
    private apollo: Apollo
    
  ) {}

  ngOnInit() {
    // this.route.paramMap.pipe(
    // map((params: ParamMap) => params.get('id')),
    // map(productId => parseInt(productId, 10)),
    // switchMap(productId => this.service.findOne(productId),
    //  subscribeOn (response => this.product = response.product)));
    this.getDetails();
  }

  getDetails() {
   const id = this.route.snapshot.params.id;
   this.querySubscription = this.apollo.watchQuery({
      query: getallbyId,
      variables: { productId: id}
   });
  };
}
