import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ProductDetailsComponent } from './data-table/product-details/product-details.component';
import { CategoriesComponent } from './categories/categories.component';
import { CustomersComponent } from './customers/customers.component';
import { EmployeesComponent } from './employees/employees.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { OrdersComponent } from './orders/orders.component';
import { RegionsComponent } from './regions/regions.component';
import { ShippersComponent } from './shippers/shippers.component';
import { TerritoriesComponent } from './territories/territories.component';
import { CategoriesDetailsComponent } from './categories/categories-details/categories-details.component';
import { CustomerdetailComponent } from './customers/customerdetail/customerdetail.component';
import { EmployeedetailsComponent } from './employees/employeedetails/employeedetails.component';
import { SuppliersdetailsComponent } from './suppliers/suppliersdetails/suppliersdetails.component';
import { OrdersdetailComponent } from './orders/ordersdetail/ordersdetail.component';
import { AddProductComponent } from './data-table/add-product/add-product.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SuppliersComponent,
    DashboardComponent,
    DataTableComponent,
    ProductDetailsComponent,
    CategoriesComponent,
    CustomersComponent,
    EmployeesComponent,
    OrderdetailsComponent,
    OrdersComponent,
    RegionsComponent,
    ShippersComponent,
    TerritoriesComponent,
    CategoriesDetailsComponent,
    CustomerdetailComponent,
    EmployeedetailsComponent,
    SuppliersdetailsComponent,
    OrdersdetailComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
