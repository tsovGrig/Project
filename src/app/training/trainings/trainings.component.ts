import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SiteUrl} from "../../common/constants";
import {TrainingService} from "../training.service";

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent {
  trainings: any;
  siteurl = SiteUrl;

  constructor( private activatedRoute: ActivatedRoute, private trainingService:TrainingService) {
    this.activatedRoute.data.subscribe((response: any) => {
      this.trainings = response.trainings;
      console.log(this.trainings);
    });
  }

}
