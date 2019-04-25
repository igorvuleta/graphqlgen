import { Component, OnInit } from '@angular/core';
import Employee from './employee';
import { ActivatedRoute } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo, QueryRef } from 'apollo-angular';

export const FindEmployeePerId = gql`
  query FindEmployeePerId($id: ID!) {
    employee(id: $id) {
      employeeId
      title
      titleOfCourtesy
      firstName
      lastName
      birthDate
      address
      hireDate
      reportsTo
      homePhone
      notes
      city
      postalCode
      country
    }
  }
`;

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  employee: Employee = {
    employeeId:'',
    title:'',
    titleOfCourtesy:'',
    firstName:'',
    lastName:'',
    birthDate:'',
    address:'',
    hireDate:'',
    reportsTo:'',
    homePhone:'',
    notes:'',
    city:'',
    postalCode:'',
    country:''
  }
  private query: QueryRef<any>;
  constructor(private router: ActivatedRoute, private apollo: Apollo) { }

  ngOnInit() {
    this.getDetails();
  }
  getDetails(){
    const id: string = this.router.snapshot.params.id;
    this.query = this.apollo.watchQuery({
      query: FindEmployeePerId,
      variables : {id: id}
 
    });
 
    this.query.valueChanges.subscribe(res => {
      this.employee = res.data.employee;
    })
  }
}
