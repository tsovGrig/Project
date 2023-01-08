import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  profileForm = this.fb.group({
    email:[''],
    password:[''],
  });

  constructor(private fb: FormBuilder) {
    localStorage.setItem('users',JSON.stringify([{firstname:'guestFirstname', lastname:'guestLastname', password:'guest', phone:'+374 55 55 55', email:'@guest@gmail.com'}]));
  }



}
