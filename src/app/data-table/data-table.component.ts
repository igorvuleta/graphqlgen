import {  Component,  OnInit, ViewChild } from '@angular/core';
import { GetProductsTableGQL } from 'src/generated/graphql';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { MatSort } from '@angular/material';

export const GetProductsTable = gql`
  query GetProductsTable {
    products {
      productId
      productName
      unitPrice
      discontinued
      unitsInStock
      unitsOnOrder
    }
  }
`;
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  
  products: Observable<any[]>;
  @ViewChild(MatSort) sort: MatSort;


  loading = true;
  error: any;
  displayedColumns: string[] = ['ID', 'Product Name', 'Unit Price', 'Details','Add'];

  private querySubscription: Subscription;

 
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  constructor(private router: Router, private apollo: Apollo){
    
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.querySubscription = this.apollo.watchQuery<any>({
      query: GetProductsTable
    })
      .valueChanges
      .subscribe(({data}) => {
        this.products = data.products;
        
      });
    
  
   
  };
  public redirectToDetails = (productId: string) => {
    let url : string =`/products/details/${productId}`;
    this.router.navigate([url]);
    console.log("did I navigate?");
  }

  public redirectToAddProduct() {
    let url: string=`/products/add/`;
    this.router.navigate([url]);
  }
  
} 
 

