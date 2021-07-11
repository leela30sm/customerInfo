import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customer/customers/customers.component';
import { CustomerDetailsComponent } from './customer-detail/customer-details/customer-details.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'customer', component: CustomersComponent },
  { path: 'customerdetail', component: CustomerDetailsComponent },
  { path: 'customerdetail/:id', component: CustomerDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
