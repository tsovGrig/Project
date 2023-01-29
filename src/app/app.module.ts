import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ReactiveFormsModule} from "@angular/forms";
import {UserService} from "./services/user.service";
import {AuthGuard} from "./guards/auth-guard.guard";
import { VacanciesComponent } from './vacancies/vacancies.component';
import { ProjectsComponent } from './projects/projects.component';
import {TrainingService} from "./services/training.service";
import {ProjectService} from "./services/project.service";
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { CreateProjectComponent } from './create-project/create-project.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MainLayoutComponent,
    TrainingsComponent,
    ProfileComponent,
    RegistrationComponent,
    OrderDetailsComponent,
    VacanciesComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    CreateProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService, TrainingService, ProjectService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
