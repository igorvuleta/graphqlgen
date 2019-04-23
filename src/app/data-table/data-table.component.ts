import {  Component,  OnInit } from '@angular/core';
import { GetProductsTableGQL } from 'src/generated/graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  
  products: Observable<any[]>;
  loading = true;
  error: any;
  displayedColumns: string[] = ['ID', 'Product Name', 'Unit Price', 'Details'];

  

 
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  constructor(private getProductsTable: GetProductsTableGQL, private router: Router){}
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.products = this.getProductsTable.watch().valueChanges.pipe(map(products => {
      this.loading = false;
      return products.data.products;
    }))
   
  };
  public redirectToDetails = (productId: string) => {
    let url : string =`/products/details/${productId}`;
    this.router.navigate([url]);
    console.log("did I navigate?");
  }
} 
 

