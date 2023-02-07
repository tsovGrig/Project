import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TrainingService} from "../training.service";
import {FormBuilder, Validators} from "@angular/forms";
import {SiteUrl} from "../../common/constants";

@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.css']
})
export class TrainingDetailComponent {
  public id:number=0;
  public training:any;
  public trainingForm:any;
  public siteurl = SiteUrl;
  types = [
    {name: "Free", value:"free"},
    {name: "Paid", value:"paid"},
  ]

  constructor(
    private activatedRoute:ActivatedRoute,
    private trainingService:TrainingService,
    private fb: FormBuilder,
    private router: Router
              ) {
    this.activatedRoute.params.subscribe((data) => {
      this.id = data['id'];
    });
    this.activatedRoute.data.subscribe((data) => {
      this.training = data['trainingDetail'];
      console.log(this.training);
    })
  }

  ngOnInit() {
    this.trainingForm = this.fb.group({
      name:[this.training.name, Validators.required],
      description:[this.training.description, Validators.required],
      image:['', ],
      type:[this.training.type, Validators.required],
    });
  }

  updateTraining(id:number){
    console.log(this.trainingForm);
    if(this.trainingForm.valid){
      console.log('valid')
      const user = this.trainingService.updateTraining(this.trainingForm.value, id);
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
