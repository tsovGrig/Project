import {NgModule} from "@angular/core";
import {CreateProjectComponent} from "./create-project/create-project.component";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";
import {ProjectsComponent} from "./projects/projects.component";
import {ProjectService} from "./project.service";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "../auth/login/login.component";
import {RegistrationComponent} from "../auth/registration/registration.component";
import {CommonModule} from "@angular/common";
import {ProjectDetailResolver} from "../resolvers/project-detail.resolver";
import {ProjectResolver} from "../resolvers/project.resolver";

@NgModule({
  declarations: [
    CreateProjectComponent,
    ProjectDetailComponent,
    ProjectsComponent
  ],
  providers: [ProjectService],
  imports: [RouterModule.forChild([
      {path: '', component: ProjectsComponent,resolve: {projects:ProjectResolver}, pathMatch: 'full'},
      {path: 'create', component: CreateProjectComponent, pathMatch: 'full'},
      {path: ':id', component: ProjectDetailComponent,resolve:{projectDetail:ProjectDetailResolver}, pathMatch: 'full'},
    ]
  ),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

})
export class ProjectModule {

}
