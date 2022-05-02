import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm !: FormGroup;
  invalidCredentialMsg !: string;

  constructor(private loginService: LoginService, private router: Router, private formbuilder: FormBuilder) {
    this.loginForm = this.formbuilder.group({
      username: [], 
      password: []
    });
  }

onFormSubmit(): void {
    const uname = this.loginForm.value.username;
    const pwd = this.loginForm.value.password;
    console.log(uname);
    console.log(pwd);
    
    
    this.loginService
      .isUserAuthenticated(uname, pwd)
      .subscribe((authenticated) => {
        if (authenticated) {
          this.router.navigate(['/books']);
        } else {
          this.invalidCredentialMsg = 'Invalid Credentials. Try again.';
        }
      });
  }
}
