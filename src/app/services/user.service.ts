import {Login} from "../interfaces/user.interface"
export class UserService {
  constructor() {
  }

  login({email, password}:any){
    console.log(email, password);
  }
}
