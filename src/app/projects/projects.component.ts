import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../services/project.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects:any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router,
  ) {
    this.activatedRoute.data.subscribe((response: any) => {
      this.projects = response.projects;
      console.log(this.projects);
    });
  }

  deleteProject(id:number){
    const deletedProject = this.projectService.deleteProject(id);
    deletedProject.subscribe((data)=>{
      console.log(data);
      window.location.reload();
    });
  }
}
