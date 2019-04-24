import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Apollo, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import gql from 'graphql-tag';

const GetSchema =  gql`
query GetSchema {
  __schema {
    queryType {
      fields {
        name
        description
      }
    }
  }
}
`;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  __schema: Observable<any>;
  private query: QueryRef<any>;

  /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Card 1', cols: 1, rows: 1 },
  //         { title: 'Card 2', cols: 1, rows: 1 },
  //         { title: 'Card 3', cols: 1, rows: 1 },
  //         { title: 'Card 4', cols: 1, rows: 1 },
  //         { title: 'Card 5', cols: 1, rows: 1 }
  //       ];
  //     }

  //     return [
  //       { title: 'Card 1', cols: 2, rows: 1 },
  //       { title: 'Card 2', cols: 1, rows: 1 },
  //       { title: 'Card 3', cols: 1, rows: 2 },
  //       { title: 'Card 4', cols: 1, rows: 1 },
  //     ];
  //   })
  // );



  constructor( private router: Router, private apollo: Apollo) {}

  ngOnInit() {
    this.query = this.apollo.watchQuery({
      query: GetSchema
    });
    this.query.valueChanges.subscribe(result=>{
      this.__schema = result.data.__schema;
    })
  }
  public reDirect = (name: string) => {
    let url: string = `/${name}`;
    this.router.navigate([url]);
  };
}
