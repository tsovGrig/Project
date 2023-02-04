import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class TrainingService{
  constructor(private http:HttpClient) {
  }

  getTrainings(){
    return this.http.get<any>(`/trainings`, );
  }

  addTraining(training:any){
    training.date = new Date();
      return this.http.post<any>(`/trainings`, training,);
  }

}
