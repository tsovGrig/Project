import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProfileComponent} from "./profile/profile.component";
import {NewOrdersComponent} from "./new-orders/new-orders.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login', component: LoginComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'profile', component:ProfileComponent},
  {path:'new-orders', component:NewOrdersComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
