import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetShippersGQL } from './../../generated/graphql';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-shippers',
  templateUrl: './shippers.component.html',
  styleUrls: ['./shippers.component.css']
})
export class ShippersComponent implements OnInit {

  shippers: Observable<any[]>;
  displayedColumns: string[] = ['ID', 'Company Name','Phone'];

  constructor(private getShippersGQL: GetShippersGQL) { }

  ngOnInit() {
    this.shippers = this.getShippersGQL.watch().valueChanges.pipe(map(shippers => shippers.data.shippers))
  }

}
