import { Component, OnInit } from "@angular/core";
import { Apollo, QueryRef } from "apollo-angular";

import { ActivatedRoute } from "@angular/router";
import { map, pluck } from "rxjs/operators";
import { Observable, Subscription } from "rxjs";
import gql from "graphql-tag";
import { Category } from "./category";
import {
  FindCategoryByIdGQL,
  CategoriesType
} from "./../../../generated/graphql";

// export const FindCategoryById = gql`
//   query FindCategoryById($id: ID!) {
//     category(id: $id) {
//       categoryId
//       categoryName
//       description
//     }
//   }
// `;

@Component({
  selector: "app-categories-details",
  templateUrl: "./categories-details.component.html",
  styleUrls: ["./categories-details.component.css"]
})
export class CategoriesDetailsComponent implements OnInit {
  category: CategoriesType;

  constructor(
    private route: ActivatedRoute,
    private findCategoryByIdGQL: FindCategoryByIdGQL
  ) {}

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {
    const id: string = this.route.snapshot.params.id;

    this.findCategoryByIdGQL
      .watch({ id: id })
      .valueChanges.pipe(map(category => category.data.category))
      .subscribe(data => (this.category = data));
  }
}
