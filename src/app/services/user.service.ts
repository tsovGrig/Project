import {Login} from "../interfaces/user.interface"
export class UserService {
  constructor() {
  }

  login({email, password}:any){
    const filter:any = {
      email,
      password
    }
    const userData:any = localStorage.getItem('users');
    const users = JSON.parse(userData);

    const findUser = users.find(function(item:any) {
      for (var key in filter) {
        if (item[key] === undefined || item[key] != filter[key])
          return false;
      }
      return true;
    });

    if(findUser){
      localStorage.setItem('loggedInUser', JSON.stringify(findUser));
      return true;
    }else{
      return false;
    }
  }

  logout(){
    localStorage.removeItem('loggedInUser');
  }
}
