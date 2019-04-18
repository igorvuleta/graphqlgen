import { Injectable } from '@angular/core';
import { GetanythingbyidGQL } from 'src/generated/graphql';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductDetailServiceService {

  constructor(private apollo: Apollo ) { }

  findOne(id: number): Observable<GetanythingbyidGQL> {
    return this.apollo
      .query<GetanythingbyidGQL>({query: GetanythingbyidGQL })
      .pipe(map(result => result.data))
      

  }
}


