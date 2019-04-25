import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetEmployeesGQL } from './../../generated/graphql';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Observable<any[]>;
  displayedColumns: string[] = ['ID', 'Employee Name','Employee Surname','Birhtday','Notes', 'Details'];


  constructor(private getEmployeesGQL: GetEmployeesGQL) { }

  ngOnInit() {
    this.employees = this.getEmployeesGQL.watch().valueChanges.pipe(map(employees => employees.data.employees))
  }

}
