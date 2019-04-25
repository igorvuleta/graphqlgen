import { Component, OnInit } from "@angular/core";
import { Apollo, QueryRef } from "apollo-angular";
import { FindCategoryByIdGQL } from "./../../../generated/graphql";
import { ActivatedRoute } from "@angular/router";
import { Category } from './category';

@Component({
  selector: "app-categories-details",
  templateUrl: "./categories-details.component.html",
  styleUrls: ["./categories-details.component.css"]
})
export class CategoriesDetailsComponent implements OnInit {
  category: Category = {
    categoryId: null,
    categoryName:'',
    description:'',
  };

  
  private query: QueryRef<any>;
  constructor(private route: ActivatedRoute, private apollo: Apollo) {}

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {
    const id: string = this.route.snapshot.params.id;
    this.query = this.apollo.watchQuery({
      query: FindCategoryByIdGQL,
      variables : {id: id}
 
    });
    this.query.valueChanges.subscribe(res => {
      this.category = res.data.category;
    })

    
  }
}
