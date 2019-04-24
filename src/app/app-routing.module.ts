import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataTableComponent } from './data-table/data-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailsComponent } from './data-table/product-details/product-details.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { CategoriesComponent } from './categories/categories.component';


const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'products', component:DataTableComponent},
  {path:'suppliers', component:SuppliersComponent},
  {path:'categories', component:CategoriesComponent},
  {path:'products/details/:id', component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule],
exports: [RouterModule]
})
export class AppRoutingModule { }
