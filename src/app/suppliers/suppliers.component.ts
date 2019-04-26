import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GetSuppliersGQL } from 'src/generated/graphql';
import { Router } from '@angular/router';




@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  suppliers: Observable<any[]>;
  loading = true;
  error: any;
  displayedColumns: string[] = ['ID', 'Supplier City','Supplier Country', 'Details'];



  constructor(private getSuppliers: GetSuppliersGQL, private router:Router) { }

  ngOnInit() {
    
      this.suppliers = this.getSuppliers.watch().valueChanges.pipe(map(suppliers => suppliers.data.suppliers))
      
   
  }
  public redirectToDetails = (supplierId: string) => {
    let url: string = `/suppliers/details/${supplierId}`;
    this.router.navigate([url]);
    console.log("did I navigate?");
  };

}
