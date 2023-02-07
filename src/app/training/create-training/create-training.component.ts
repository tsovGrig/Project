import { Component } from '@angular/core';
import {ProjectService} from "../../project/project.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {TrainingService} from "../training.service";

@Component({
  selector: 'app-create-training',
  templateUrl: './create-training.component.html',
  styleUrls: ['./create-training.component.css']
})
export class CreateTrainingComponent {
  public trainingForm:any;
  types = [
    {name: "Free", value:"free"},
    {name: "Paid", value:"paid"},
  ]

  constructor(
    private trainingService:TrainingService,
    private fb: FormBuilder,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.trainingForm = this.fb.group({
      name:["", Validators.required],
      description:["", Validators.required],
      image:["", Validators.required],
      type:["", Validators.required],
    });
  }

  saveTraining(){
    if(this.trainingForm.valid){
      const user = this.trainingService.addTraining(this.trainingForm.value);
      user.subscribe((data:any)=>{
        this.router.navigate(['/main/trainings']);
      })
    }
  }



  onChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.trainingForm.patchValue({
        image: file
      });
    }
  }



}
