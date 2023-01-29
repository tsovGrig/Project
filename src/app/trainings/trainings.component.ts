import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent {
  trainings: any;

  constructor( private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((response: any) => {
      this.trainings = response.trainings;
      console.log(this.trainings);
    });
  }
}
