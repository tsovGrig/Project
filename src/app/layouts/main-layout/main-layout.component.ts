import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  constructor(private userService:UserService,private router: Router,) {

  }
  logout(){
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
