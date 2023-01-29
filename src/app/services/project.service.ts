import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class ProjectService{
  projects:any;
  headers:any
 constructor(private http:HttpClient) {
   this.headers = this.getHeader();
 }

 getAllProjects(){
   return this.http.get<any>(`https://api.dev.padcllc.com/projects/all`, {headers:this.headers});
 }

 getProjectById(id:number){
   return this.http.get<any>(`https://api.dev.padcllc.com/projects/${id}`, {headers:this.headers});
 }

 updateProject(id:number, project:any){
   return this.http.put<any>(`https://api.dev.padcllc.com/projects/${id}`, project, {headers:this.headers});
 }

 addProject(project:any){
   return this.http.post<any>(`https://api.dev.padcllc.com/projects`, project,{headers:this.headers});
 }

 deleteProject(id:number){
   return this.http.delete<any>(`https://api.dev.padcllc.com/projects/${id}`, {headers:this.headers});
 }

 getHeader(){
   return new HttpHeaders({
     'Content-Type': 'application/json',
     'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
   });
 }
}
