import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class TrainingService{
  constructor(private http:HttpClient) {
  }

  getTrainings(){
    const headers:any = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    })
    return this.http.get<any>(`https://api.dev.padcllc.com/trainings`, {headers});
  }
}
