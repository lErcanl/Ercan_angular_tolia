import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  realUser = localStorage.getItem("username");
  realPassword= localStorage.getItem("password");
  campaignListRoute="";
  ngOnInit(): void {
    localStorage.setItem("username","ercan");
    localStorage.setItem("password","1234");
  }
  getVal(username:string,password:string){
    if((username==this.realUser) && (password == this.realPassword)){
      this.router.navigate(['/campaignsList']);
      console.log("user verified");
    }
    else{
        alert("Wrong UserName or Password");
    }
  }
}
