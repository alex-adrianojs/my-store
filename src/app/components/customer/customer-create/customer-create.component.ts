import { CustomerService } from './../customer.service';
import { Customer } from './../customer.model';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  hide = true;

  customer: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  constructor(private customerService: CustomerService, private router: Router) {
    
   }

  ngOnInit(): void {
  }

  createCustomer():void {
    this.customerService.createCustomer(this.customer).subscribe(() =>{
      this.customerService.showMessage('Customer create...')
      this.router.navigate(['/customers']) 
      
    })
}


}
