import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetTerritoriesGQL } from './../../generated/graphql';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-territories',
  templateUrl: './territories.component.html',
  styleUrls: ['./territories.component.css']
})
export class TerritoriesComponent implements OnInit {

  territories: Observable<any[]>;
  displayedColumns: string[] = ['ID','Territory Description'];
  constructor(private getTerritoriesGQL: GetTerritoriesGQL) { }

  ngOnInit() {
    this.territories = this.getTerritoriesGQL.watch().valueChanges.pipe(map(territories => territories.data.territories))

  }


}
