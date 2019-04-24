import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { GetCategoriesGQL } from './../../generated/graphql';

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"]
})
export class CategoriesComponent implements OnInit {
  categories: Observable<any[]>;
  displayedColumns: string[] = ['ID', 'Category Name','Description', 'Details'];

  constructor(private getCategories: GetCategoriesGQL) {}

  ngOnInit() {
    this.categories = this.getCategories.watch().valueChanges.pipe(
      map(categories => categories.data.categories
      
    ));
  }
}
