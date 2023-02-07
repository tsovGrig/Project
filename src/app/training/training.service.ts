import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import * as moment from "moment";

@Injectable()
export class TrainingService{
  constructor(private http:HttpClient) {
  }

  getTrainings(){
    return this.http.get<any>(`/trainings`, );
  }

  getTrainingById(id:number){
    return this.http.get<any>(`/trainings/${id}`);
  }

  addTraining(training:any){
    let data:FormData = new FormData();
    data.append('image', training.image, training.image.name);
    data.append('name', training.name);
    data.append('description', training.description);
    data.append('type', training.type);
    data.append('date', moment().format());
      return this.http.post<any>(`/trainings`, data,);
  }

  updateTraining(training:any, id:number){
    let data:FormData = new FormData();
    if(training.image){
      data.append('image', training.image, training.image.name);
    }

    data.append('name', training.name);
    data.append('description', training.description);
    data.append('type', training.type);
    data.append('date', moment().format());
    return this.http.put<any>(`/trainings/${id}`, data,);
  }

}
