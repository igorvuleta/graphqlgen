import { Component, OnInit } from "@angular/core";
import { Apollo, QueryRef } from "apollo-angular";

import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import gql from 'graphql-tag';
import { Category } from './category';

export const FindCategoryById = gql`
  query FindCategoryById($id: ID!) {
    category(id: $id) {
      categoryId
      categoryName
      description
    }
  }
`;


@Component({
  selector: "app-categories-details",
  templateUrl: "./categories-details.component.html",
  styleUrls: ["./categories-details.component.css"]
})
export class CategoriesDetailsComponent implements OnInit {
  category: Category = {
    categoryId:'',
    categoryName:'',
    description:''
  }
  private query: QueryRef<any>;
  constructor(
    private route: ActivatedRoute,
    private apollo: Apollo
  ) {}

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {
    const id: string = this.route.snapshot.params.id;
   this.query = this.apollo.watchQuery({
     query: FindCategoryById,
     variables : {id: id}

   });

   this.query.valueChanges.subscribe(res => {
     this.category = res.data.category;
   })
  }
}
