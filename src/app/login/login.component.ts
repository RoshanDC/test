import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  stringInterpolation = "Enter username";
  stringInterpolation1 = "Enter password";

    constructor() { }

  ngOnInit() {
      }

     loginSubmit(){
    console.log("Login Clicked");
       alert("Are you sure to login?");
      }


}
