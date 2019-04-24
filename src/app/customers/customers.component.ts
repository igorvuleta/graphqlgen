import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { GetCustomersGQL } from "./../../generated/graphql";
import { map } from "rxjs/operators";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.css"]
})
export class CustomersComponent implements OnInit {
  customers: Observable<any[]>;
  displayedColumns: string[] = ['ID', 'Company Name', 'Contact Name','Country','Region', 'Details'];


  constructor(private getCustomersGQL: GetCustomersGQL) {}

  ngOnInit() {
    this.customers = this.getCustomersGQL
      .watch()
      .valueChanges.pipe(map(customers => customers.data.customers));
  }
}
