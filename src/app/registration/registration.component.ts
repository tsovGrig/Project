import { Component } from '@angular/core';
import {UserService} from "../services/user.service";
import {map} from "rxjs";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  public roles:any;
  public errors:[] = [];
  public formErrors:any={};
  public valid = true;
  public submitted = false;

  registrationForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required],
    roleId:['', [Validators.required, Validators.pattern("^[0-9]*$"),]]
  });


  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder,){
   this.userService.getRoles().pipe(map(data => data.data)).subscribe((data:any)=>{
     this.roles = data;
   });
  }

  register(){
    this.submitted = true;
    this.checkErrors();
    console.log(this.formErrors);
    if(this.registrationForm.valid){
      const user = this.userService.register(this.registrationForm.value)
      user.subscribe(data=>{
        if(data.success){
          this.router.navigate(['/login']);
        }
      },
        (err)=>{
        this.errors = err.error.error.message;
        }
      )
    }

  }

  checkErrors(){
    if(this.registrationForm.controls.email.touched || this.submitted ){
      const errors = this.registrationForm.controls.email?.errors;
      if(errors){
       this.formErrors.email = errors;
      }
    }
    if(this.registrationForm.controls.firstName.touched || this.submitted){
      const errors = this.registrationForm.controls.firstName?.errors;
      if(errors){
        this.formErrors.firstName = errors;
      }
    }
    if(this.registrationForm.controls.lastName.touched || this.submitted ){
      const errors = this.registrationForm.controls.lastName?.errors;
      if(errors){
        this.formErrors.lastName = errors;
      }
    }
    if(this.registrationForm.controls.password.touched || this.submitted ){
      const errors = this.registrationForm.controls.password?.errors;
      if(errors){
        this.formErrors.password = errors;
      }
    }
    if(this.registrationForm.controls.roleId.touched  || this.submitted){
      const errors = this.registrationForm.controls.roleId?.errors;
      if(errors){
        this.formErrors.roleId = errors;
      }
    }
  }

}
