import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs";
import {ProjectService} from "../../services/project.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent {
  edit:boolean =true;
  save:boolean = false;
  project:any;
  id:number =0;
  public projectForm:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService:ProjectService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.activatedRoute.params.subscribe((data)=>{
      this.id = data['id'];
    });
    this.activatedRoute.data.subscribe((data)=>{
      this.project = data['projectDetail'];
    })
  }

  ngOnInit() {
    this.projectForm = this.fb.group({
      title:[{value:this.project.title, disabled: true }, Validators.required],
      description:[{value:this.project.description, disabled:true}, Validators.required],
    });
  }

  editProject(){
    this.projectForm = this.fb.group({
      title:[ this.project.title , Validators.required],
      description:[this.project.description, Validators.required],
    });
    this.save = true;
    this.edit = false;
  }

  updateProject(){
    if(this.projectForm.valid) {
      const project = this.projectService.updateProject(this.id,this.projectForm.value);
      project.subscribe(data => {
        console.log(data);
        this.router.navigate(['/main/projects']);
      });
    }
  }
}
