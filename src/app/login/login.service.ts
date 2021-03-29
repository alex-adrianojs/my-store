import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  authenticate(email: string, password: string ): boolean{
    if(email == "alexadriano.dev@gmail" && password == "alex123") {
      return true;
    }

  }
}
