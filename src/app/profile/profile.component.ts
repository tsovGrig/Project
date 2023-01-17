import { Component } from '@angular/core';
import {UserService} from "../services/user.service";
import {UserProfile} from "../interfaces/user.interface";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  private user:UserProfile;
  public userForm;
  saveButton = false;
  editButton = true;

 constructor(
   private userService:UserService,
   private fb: FormBuilder,
   ) {
   this.user = this.userService.getLoggedInUser();
   this.userForm = this.fb.group({
     firstname:[{value:this.user.firstname, disabled: true }, Validators.required],
     lastname:[{value:this.user.lastname, disabled:true}, Validators.required],
     phone:[{value:this.user.phone, disabled: true }, Validators.required],
     email:[{value:this.user.email, disabled: true }, Validators.required],

   });
 }

 editProfile(){
   this.userForm = this.fb.group({
     firstname:[this.user.firstname, Validators.required],
     lastname:[this.user.lastname, Validators.required],
     phone:[this.user.phone, Validators.required],
     email:[this.user.email, Validators.required],
   });
   this.saveButton = true;
   this.editButton = false;
 }
}
