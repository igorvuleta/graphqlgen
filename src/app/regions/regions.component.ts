import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetRegionsGQL } from 'src/generated/graphql';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  regions:Observable<any[]>
  displayedColumns: string[] = ['ID', 'Region Description'];

  constructor(private getRegionsGQL: GetRegionsGQL ) { }

  ngOnInit() {
    this.regions = this.getRegionsGQL.watch().valueChanges.pipe(map(regions => regions.data.regions))
  }

}
