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
   return this.http.get<any>(`/projects/all` );
 }

 getProjectById(id:number){
   return this.http.get<any>(`/projects/${id}`);
 }

 updateProject(id:number, project:any){
   return this.http.put<any>(`/projects/${id}`, project, );
 }

 addProject(project:any){
   return this.http.post<any>(`/projects`, project,);
 }

 deleteProject(id:number){
   return this.http.delete<any>(`/projects/${id}`, );
 }

 getHeader(){
   return new HttpHeaders({
     'Content-Type': 'application/json',
     'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
   });
 }
}
