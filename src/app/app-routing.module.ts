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
import {ProjectsComponent} from "./projects/projects.component";
import {VacanciesComponent} from "./vacancies/vacancies.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login', component: LoginComponent},
  {path:'registration', component:RegistrationComponent },
  { path: 'main', component:MainLayoutComponent, canActivate: [AuthGuard], children:[
      {path:'dashboard',component: DashboardComponent},
      {path:'profile', component:ProfileComponent, resolve:{ profile:ProfileResolver }},
      {path:'trainings', component:TrainingsComponent},
      {path:'projects', component:ProjectsComponent},
      {path:'vacancies', component:VacanciesComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
