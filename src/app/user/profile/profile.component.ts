import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {UserProfile} from "../../auth/interfaces/user.interface";
import {map} from "rxjs";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private user:any = {};
  public userForm:any;
  saveButton = false;
  editButton = true;

 constructor(
   private userService:UserService,
   private fb: FormBuilder,
   private activatedRoute: ActivatedRoute
   ) {
   this.activatedRoute.data.subscribe((response: any) => {
     this.user = response.profile;
   });
 }

  ngOnInit() {
    this.userForm = this.fb.group({
      firstname:[{value:this.user.firstName, disabled: true }, Validators.required],
      lastname:[{value:this.user.lastName, disabled:true}, Validators.required],
      email:[{value:this.user.email, disabled: true }, Validators.required],
    });
  }

 editProfile(){
   this.userForm = this.fb.group({
     firstname:[this.user.firstName, Validators.required],
     lastname:[this.user.lastName, Validators.required],
     email:[this.user.email, Validators.required],
   });
   this.saveButton = true;
   this.editButton = false;
 }
}
