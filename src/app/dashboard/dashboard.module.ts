import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {RouterModule} from "@angular/router";
import {ProjectsComponent} from "../project/projects/projects.component";
import {ProjectDetailComponent} from "../project/project-detail/project-detail.component";
import {CreateProjectComponent} from "../project/create-project/create-project.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [DashboardComponent],
  imports: [RouterModule.forChild([
      {path: '', component: DashboardComponent, pathMatch: 'full'},
    ]
  ),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class DashboardModule {

}
