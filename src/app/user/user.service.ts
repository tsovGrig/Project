import {Login} from "../auth/interfaces/user.interface"
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import jwt_decode from 'jwt-decode';

@Injectable()
export class UserService {

  constructor(private http:HttpClient) {

  }

  login(user:any){
    return this.http.post<any>("/auth/login", user);
  }

  getLoggedInUser(){
    return localStorage.getItem('accessToken');

  }


  logout(){
    localStorage.removeItem('accessToken');
  }

  getRoles(){
    return this.http.get<any>("/role/all");
  }

  register(userData:any){
    const {roleId, ...user} = userData;
    user.roleId = Number(roleId);
    return this.http.post<any>("/auth/registration", user);
  }

  getUserId(){
    const token = localStorage.getItem('accessToken');
    if(token){
      try {
        const userData = jwt_decode(token);
        console.log(userData);
        return userData;
      } catch(Error) {
        return null;
      }
    }
    return null;
  }

  getMe(){
    const headers:any = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getLoggedInUser()}`
    })
    return this.http.get<any>(`/user/me`, {headers});
  }
}
