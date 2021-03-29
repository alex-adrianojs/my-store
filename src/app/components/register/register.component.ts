import { CustomerService } from './../../customer/customer.service';
import { Customer } from './../../customer/customer.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //form: FormGroup;

  customer : Customer = {
    name: null,
    email: null, 
    password: null
  }
 
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  createCustomer():void{
    this.customerService.create(this.customer).subscribe(() => {
      this.customerService.showMessage("Customer Register")
    })

  }

}
