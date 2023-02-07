import {NgModule} from "@angular/core";
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {UserService} from "../user/user.service";
import {RouterModule, ROUTES} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [RegistrationComponent, LoginComponent],
  providers: [UserService],
  imports: [RouterModule.forChild([
      {path: 'login', component: LoginComponent, pathMatch: 'full'},
      {path: 'registration', component: RegistrationComponent, pathMatch: 'full'}
    ]
  ),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class AuthModule {

}
