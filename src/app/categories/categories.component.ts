import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { GetCategoriesGQL } from "./../../generated/graphql";
import {  Router } from "@angular/router";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"]
})
export class CategoriesComponent implements OnInit {
  categories: Observable<any[]>;
  displayedColumns: string[] = [
    "ID",
    "Category Name",
    "Description",
    "Details"
  ];

  constructor(
    private getCategories: GetCategoriesGQL,
    private router: Router
  ) {}

  ngOnInit() {
    this.categories = this.getCategories
      .watch()
      .valueChanges.pipe(map(categories => categories.data.categories));
  }
  public redirectToDetails = (categoryId: string) => {
    let url: string = `/categories/details/${categoryId}`;
    this.router.navigate([url]);
    console.log("did I navigate?");
  };
}
