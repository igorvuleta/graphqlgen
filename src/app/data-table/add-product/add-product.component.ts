import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { ProductsInputGQL } from "src/generated/graphql";
import { Router } from '@angular/router';


export const ProductsInput = gql`
  mutation productsInput($product: productInput!) {
    productInput(product: $product) {
      productName
      unitPrice
      unitsInStock
      unitsOnOrder
      categoryId
      discontinued
      quantityPerUnit
      reorderLevel
    }
  }
`;

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"]
})
export class AddProductComponent implements OnInit {
  productForm = new FormGroup({
    productName: new FormControl(""),
    unitPrice: new FormControl(""),
    unitsInStock: new FormControl(""),
    unitsOnOrder: new FormControl(""),
    categoryId: new FormControl(""),
    discontinued: new FormControl(""),
    quantityPerUnit: new FormControl(""),
    reorderLevel: new FormControl(1)
  });

  constructor(
    private apollo: Apollo,
    private router: Router
    
  ) {}

  ngOnInit() {
    
  }

  get formvalue() {
    return this.productForm.controls;
  }
  public createinputProduct(){
    this.router.navigate(['/products']);
    this.apollo.mutate({
      mutation:ProductsInput ,
      variables: {
        product:{productName: this.formvalue.productName.value,
        unitPrice: this.formvalue.unitPrice.value,
        unitsInStock: this.formvalue.unitsInStock.value,
        unitsOnOrder: this.formvalue.unitsOnOrder.value,
        categoryId: this.formvalue.categoryId.value,
        discontinued: this.formvalue.discontinued.value,
        quantityPerUnit: this.formvalue.quantityPerUnit.value,
        reorderLevel: this.formvalue.reorderLevel.value}
      }
      
    }).subscribe();
  }
  
  
 
}
