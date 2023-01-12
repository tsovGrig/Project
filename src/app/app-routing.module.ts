import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProfileComponent} from "./profile/profile.component";
import {NewOrdersComponent} from "./new-orders/new-orders.component";
import {AuthGuard} from "./guards/auth-guard.guard";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login', component: LoginComponent},
  // {path:'registration', component: RegistrationComponent},
  {path:'dashboard',  canActivate: [AuthGuard],component: DashboardComponent},
  {path:'profile', canActivate: [AuthGuard], component:ProfileComponent},
  {path:'new-orders', canActivate: [AuthGuard], component:NewOrdersComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
