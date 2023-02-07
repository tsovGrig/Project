import {NgModule} from "@angular/core";
import {CreateTrainingComponent} from "./create-training/create-training.component";
import {TrainingDetailComponent} from "./training-detail/training-detail.component";
import {TrainingsComponent} from "./trainings/trainings.component";
import {TrainingService} from "./training.service";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {ProjectsComponent} from "../project/projects/projects.component";
import {ProjectDetailComponent} from "../project/project-detail/project-detail.component";
import {CreateProjectComponent} from "../project/create-project/create-project.component";
import {TrainingResolver} from "../resolvers/training.resolver";
import {TrainingDetailResolver} from "../resolvers/training-detail.resolver";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    CreateTrainingComponent,
    TrainingDetailComponent,
    TrainingsComponent
  ],
  providers: [TrainingService],
  imports: [RouterModule.forChild([
      {path: '', component: TrainingsComponent, pathMatch: 'full', resolve: {trainings: TrainingResolver}},
      {path: 'create', component: CreateTrainingComponent, pathMatch: 'full'},
      {
        path: ':id',
        component: TrainingDetailComponent,
        pathMatch: 'full',
        resolve: {trainingDetail: TrainingDetailResolver},
      },
    ]
  ),
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class TrainingModule {

}
