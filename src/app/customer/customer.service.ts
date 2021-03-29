import { Customer } from './customer.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = "http://localhost:3002/customers"
  constructor(private snackBar : MatSnackBar, private http : HttpClient) { 

  }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.baseUrl, customer)
  }

}
