import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) { 
    
   }

  ngOnInit(): void {

    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  // async onSubmit() {
  //   this.loginInvalid = false;
  //   this.formSubmitAttempt = false;
  //   if (this.form.valid) {
  //     try {
  //       const username = this.form.get('username').value;
  //       const password = this.form.get('password').value;
  //       //await this.authService.login(username, password);
  //     } catch (err) {
  //       this.loginInvalid = true;
  //     }
  //   } else {
  //     this.formSubmitAttempt = true;
  //   }
  // }

  navigateToRegister(): void {
    this.router.navigate(['register'])
  }

  onSubmit(){
    this.loginInvalid = false;
    if (this.form.valid) {
        const username = this.form.get('username').value;
        const password = this.form.get('password').value;
        if(this.loginService.authenticate(username, password)){
          this.loginInvalid 
          console.log(this.loginInvalid);
        }
    }

  }

}
