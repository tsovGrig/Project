import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of, catchError, map} from 'rxjs';
import {ProjectService} from "../services/project.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectResolver implements Resolve<boolean> {
  constructor(private projectService:ProjectService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.projectService.getAllProjects().pipe(map(project => project.data,
      catchError(error => {
        return of('No data');
      })));

  }
}
