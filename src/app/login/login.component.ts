import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Login} from "../interfaces/user.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  valid:boolean = true;


  userForm = this.fb.group({
    email:['', Validators.required],
    password:['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public userService:UserService
    ) {
    localStorage.setItem('users',JSON.stringify([{firstname:'guestFirstname', lastname:'guestLastname', password:'guest', phone:'+374 55 55 55', email:'guest@gmail.com'}]));
  }

  login(){
    if(this.userForm.valid){
      this.valid=true;
      const userExist = this.userService.login(this.userForm.value);
      if(userExist){
        this.router.navigate(['/dashboard']);
      }
    }else{
      this.valid = false;
      this.router.navigate(['/login']);
    }
  }

  isValid(){
    if(this.userForm.controls.email.touched && this.userForm.controls.password.touched ){
      return this.userForm.valid;
    }
    return true;
  }


}
