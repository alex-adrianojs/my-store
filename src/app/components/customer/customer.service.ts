import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { Customer } from "./customer.model";

@Injectable({
    providedIn: 'root'
})
export class CustomerService{

  baseUrl = "http://localhost:3001/customer"
  constructor(private snackBar: MatSnackBar, private http: HttpClient){
           
  }

  showMessage(msg: string):void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  createCustomer(customer: Customer): Observable<Customer>{
      return this.http.post<Customer>(this.baseUrl, customer)
  }

  read(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.baseUrl)
  }
}