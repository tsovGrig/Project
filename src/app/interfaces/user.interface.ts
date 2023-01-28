export interface Login {
  email:string,
  password:string
}

export interface UserProfile {
  id: string;
  firstname:string;
  lastname:string;
  email:string;
  roleId:number
}
