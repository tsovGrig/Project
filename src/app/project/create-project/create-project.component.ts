import { Component } from '@angular/core';
import {ProjectService} from "../project.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {
  public projectForm:any;
 constructor(
   private projectService:ProjectService,
   private fb: FormBuilder,
   private router: Router,
 ) {
 }

  ngOnInit() {
    this.projectForm = this.fb.group({
      title:["", Validators.required],
      description:["", Validators.required],
    });
  }

  saveProject(){
    if(this.projectForm.valid){
      const user = this.projectService.addProject(this.projectForm.value);
      user.subscribe((data)=>{
        this.router.navigate(['/main/projects']);
      })
    }
  }

}
