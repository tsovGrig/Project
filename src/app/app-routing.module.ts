import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProfileComponent} from "./profile/profile.component";
import {TrainingsComponent} from "./trainings/trainings.component";
import {AuthGuard} from "./guards/auth-guard.guard";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {ProfileResolver} from "./resolvers/profile.resolver";
import {ProjectResolver} from "./resolvers/project.resolver";
import {ProjectsComponent} from "./projects/projects.component";
import {VacanciesComponent} from "./vacancies/vacancies.component";
import {TrainingResolver} from "./resolvers/training.resolver";
import {ProjectDetailComponent} from "./projects/project-detail/project-detail.component";
import {ProjectDetailResolver} from "./resolvers/project-detail.resolver";
import {CreateProjectComponent} from "./create-project/create-project.component";
import {CreateTrainingComponent} from "./create-training/create-training.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login', component: LoginComponent},
  {path:'registration', component:RegistrationComponent },
  { path: 'main', component:MainLayoutComponent, canActivate: [AuthGuard], children:[
      {path:'dashboard',component: DashboardComponent},
      {path:'profile', component:ProfileComponent, resolve:{ profile:ProfileResolver }},
      {path:'trainings', component:TrainingsComponent, resolve:{trainings:TrainingResolver}},
      {path:'projects', component:ProjectsComponent, resolve: {projects:ProjectResolver}, pathMatch: 'full' },
      {path:'projects/:id', component:ProjectDetailComponent,resolve:{projectDetail:ProjectDetailResolver},  pathMatch: 'full'},
      {path:'create/project', component:CreateProjectComponent},
      {path:'vacancies', component:VacanciesComponent},
      {path:'trainings', component:TrainingsComponent, pathMatch: 'full' },
      {path:'create/training', component:CreateTrainingComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
