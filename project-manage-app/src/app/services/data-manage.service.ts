import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataManageService {
  private project = {
    projectDetails : {},
    projectGallery:{},
    projectCost:{}
  }
  constructor() { }

  public createProject(projectDetails:{}){
    this.project['projectDetails'] = projectDetails;
    console.log(this.project);
  }

  public updateProject(projectGallery:{}){
    this.project['projectGallery'] = projectGallery;
    console.log(this.project);
  }

  public updateCost(reqBody:{}){
    this.project['projectCost'] = reqBody;
    console.log(this.project)
  }
}
