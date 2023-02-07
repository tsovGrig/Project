import {NgModule} from "@angular/core";
import {ProfileComponent} from "./profile/profile.component";
import {UserService} from "./user.service";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {TrainingsComponent} from "../training/trainings/trainings.component";
import {TrainingDetailComponent} from "../training/training-detail/training-detail.component";
import {CreateTrainingComponent} from "../training/create-training/create-training.component";
import {ProfileResolver} from "../resolvers/profile.resolver";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [RouterModule.forChild([
      {path: '', component: ProfileComponent, pathMatch: 'full',  resolve:{ profile:ProfileResolver }},
    ]
  ),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[],
  providers: [UserService]
})
export class UserModule{

}
