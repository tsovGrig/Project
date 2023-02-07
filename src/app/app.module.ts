import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "./user/user.service";
import {AuthGuard} from "./common/guards/auth-guard.guard";
import { VacanciesComponent } from './vacancy/vacancies/vacancies.component';
import { ProjectsComponent } from './project/projects/projects.component';
import {TrainingService} from "./training/training.service";
import {ProjectService} from "./project/project.service";
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import {RequestInterceptor} from "./common/interceptors/request.interceptor";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService, TrainingService, ProjectService, AuthGuard,      {
    provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi:true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
