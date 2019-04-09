import { Component, OnInit } from "@angular/core";
import { GetProductsGQL } from './../../generated/graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  products: Observable<any[]>
  loading = true;
  error: any;

  constructor(private getProducts: GetProductsGQL) {}

  ngOnInit() {
    this.products = this.getProducts.watch().valueChanges.pipe(map(result => {
      this.loading = false; 
      return result.data.products
    }));
  
    
     
      
  }
}
