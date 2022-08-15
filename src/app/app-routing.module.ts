import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { CustomerReadComponent } from './components/customer/customer-read/customer-read.component';

import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'customer/create',
    component: CustomerCreateComponent
  },
  {
    path: 'customers',
    component: CustomerReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
