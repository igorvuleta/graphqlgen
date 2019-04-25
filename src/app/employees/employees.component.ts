import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { GetEmployeesGQL } from "./../../generated/graphql";
import { map } from "rxjs/operators";
import { Router } from '@angular/router';

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.css"]
})
export class EmployeesComponent implements OnInit {
  employees: Observable<any[]>;
  displayedColumns: string[] = [
    "ID",
    "Employee Name",
    "Employee Surname",
    "Birhtday",
    "Notes",
    "Details"
  ];

  constructor(private getEmployeesGQL: GetEmployeesGQL, private router: Router) {}

  ngOnInit() {
    this.employees = this.getEmployeesGQL
      .watch()
      .valueChanges.pipe(map(employees => employees.data.employees));
  }
  public redirectToDetails = (employeeId: string) => {
    let url: string = `/employees/details/${employeeId}`;
    this.router.navigate([url]);
    console.log("did I navigate?");
  };
}
