import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataTableComponent } from './data-table/data-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailsComponent } from './data-table/product-details/product-details.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { CategoriesComponent } from './categories/categories.component';
import { CustomersComponent } from './customers/customers.component';
import { EmployeesComponent } from './employees/employees.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { OrdersComponent } from './orders/orders.component';
import { RegionsComponent } from './regions/regions.component';
import { ShippersComponent } from './shippers/shippers.component';
import { TerritoriesComponent } from './territories/territories.component';
import { CategoriesDetailsComponent } from './categories/categories-details/categories-details.component';


const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'products', component:DataTableComponent},
  {path:'suppliers', component:SuppliersComponent},
  {path:'categories', component:CategoriesComponent},
  {path:'customers', component:CustomersComponent},
  {path:'employees', component:EmployeesComponent},
  {path:'orderDetails', component:OrderdetailsComponent},
  {path:'orders', component:OrdersComponent},
  {path:'regions', component:RegionsComponent},
  {path:'shippers', component:ShippersComponent},
  {path:'territories', component:TerritoriesComponent},
  {path:'products/details/:id', component:ProductDetailsComponent},
  {path:'categories/details/:id', component:CategoriesDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule],
exports: [RouterModule]
})
export class AppRoutingModule { }
