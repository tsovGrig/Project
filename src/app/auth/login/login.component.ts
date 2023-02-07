import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../../user/user.service";
import {Login} from "../interfaces/user.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  valid:boolean = true;
  userExist:boolean = true;
  public errors:[] = [];


  userForm = this.fb.group({
    email:['', Validators.required],
    password:['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService:UserService
    ) {
  }

  login(){
    if(this.userForm.valid){
      this.valid=true;
      const user = this.userService.login(this.userForm.value);
      user.subscribe(data=>{
        console.log(data);
        if(data.success){
          localStorage.setItem('accessToken', data.data.accessToken);
          this.router.navigate(['/main/dashboard']);
        }
      },
      (err)=>{
        this.errors = err.error.error.message;
      }
      );
    }else{
      this.valid=false;
    }
  }

  isValid(){
    if(this.userForm.controls.email.touched && this.userForm.controls.password.touched ){
      return this.userForm.valid;
    }
    return true;
  }

  userNotExist(){
    if(this.valid){
      if(!this.userExist){
        return false;
      }
    }
    return true;
  }
}
