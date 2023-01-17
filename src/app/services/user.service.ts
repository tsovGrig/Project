import {Login} from "../interfaces/user.interface"
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class UserService {
  private url = '/assets/json/users.json';
  private users:any;
  constructor(private http:HttpClient) {
    this.getUsers();
  }

  login({email, password}:any){
    const filter:any = {
      email,
      password
    }
    const users = this.users;

    const findUser = users.find(function(item:any) {
      for (var key in filter) {
        if (item[key] === undefined || item[key] != filter[key])
          return false;
      }
      return true;
    });
    if(findUser){
      const {password, ...userData} = findUser;
      localStorage.setItem('loggedInUser', JSON.stringify(userData));
      return true;
    }else{
      return false;
    }
  }

  getLoggedInUser(){
    const userData:any = localStorage.getItem('loggedInUser');
    return JSON.parse(userData);
  }

  getUsers(){
    const url = "/assets/json/users.json";
     this.http.get(url).subscribe((response)=>{
      this.users = response;
    })
  }

  logout(){
    localStorage.removeItem('loggedInUser');
  }
}
