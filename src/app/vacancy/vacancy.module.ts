import {NgModule} from "@angular/core";
import {VacanciesComponent} from "./vacancies/vacancies.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [VacanciesComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class VacancyModule {

}
