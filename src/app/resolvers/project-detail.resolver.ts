import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, ActivatedRoute
} from '@angular/router';
import {catchError, map, Observable, of} from 'rxjs';
import {ProjectService} from "../services/project.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailResolver implements Resolve<boolean> {
  id:any;
  constructor(private projectService:ProjectService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.projectService.getProjectById(route.params['id']).pipe(map(project => project.data,
      catchError(error => {
        return of('No data');
      })));
  }
}
