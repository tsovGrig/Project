import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {RegistrationComponent} from "./auth/registration/registration.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProfileComponent} from "./user/profile/profile.component";
import {TrainingsComponent} from "./training/trainings/trainings.component";
import {AuthGuard} from "./common/guards/auth-guard.guard";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {ProfileResolver} from "./resolvers/profile.resolver";
import {ProjectResolver} from "./resolvers/project.resolver";
import {ProjectsComponent} from "./project/projects/projects.component";
import {VacanciesComponent} from "./vacancy/vacancies/vacancies.component";
import {TrainingResolver} from "./resolvers/training.resolver";
import {ProjectDetailComponent} from "./project/project-detail/project-detail.component";
import {ProjectDetailResolver} from "./resolvers/project-detail.resolver";
import {CreateProjectComponent} from "./project/create-project/create-project.component";
import {CreateTrainingComponent} from "./training/create-training/create-training.component";
import {TrainingDetailComponent} from "./training/training-detail/training-detail.component";
import {TrainingDetailResolver} from "./resolvers/training-detail.resolver";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: 'main', component: MainLayoutComponent, canActivate: [AuthGuard], children: [
      {
        path: 'projects',
        loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)
      },

      {
        path: 'trainings',
        loadChildren: () => import('./training/training.module').then(m => m.TrainingModule)
      },

      {
        path: 'profile',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    ]
  }




  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // {path:'login', component: LoginComponent},
  // {path:'registration', component:RegistrationComponent },
  // { path: 'main', component:MainLayoutComponent, canActivate: [AuthGuard], children:[
  //     {path:'dashboard',component: DashboardComponent},
  //     {path:'profile', component:ProfileComponent, resolve:{ profile:ProfileResolver }},
  //     {path:'trainings', component:TrainingsComponent, resolve:{trainings:TrainingResolver}},
  //     {path:'trainings/create', component:CreateTrainingComponent, pathMatch: 'full' },
  //     {path:'trainings/:id', component:TrainingDetailComponent, resolve:{trainingDetail:TrainingDetailResolver}, pathMatch:'full'},
  //     {path:'projects', component:ProjectsComponent, resolve: {projects:ProjectResolver}, pathMatch: 'full' },
  //     {path:'projects/:id', component:ProjectDetailComponent,resolve:{projectDetail:ProjectDetailResolver},  pathMatch: 'full'},
  //     {path:'projects/create', component:CreateProjectComponent},
  //     {path:'vacancies', component:VacanciesComponent},
  //   ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
