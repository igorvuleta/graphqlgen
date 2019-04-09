import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GetSuppliersGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  suppliers: Observable<any[]>;
  loading = true;
  error: any;



  constructor(private getSuppliers: GetSuppliersGQL) { }

  ngOnInit() {
    this.suppliers = this.getSuppliers.watch().valueChanges.pipe(map(result => {
      this.loading = false;
      return result.data.suppliers;
    } ))
  }

}