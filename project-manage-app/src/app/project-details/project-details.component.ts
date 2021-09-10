import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataManageService } from '../services/data-manage.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  public projectDetails = new FormGroup({
    organization : new FormControl(''),
    category : new FormControl(''),
    activity: new FormControl(''),
    title : new FormControl(''),
    minAge: new FormControl(''),
    maxAge : new FormControl(''),
    desc: new FormControl('')
  });
  constructor(
    private dataService : DataManageService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  createProject(){
    this.dataService.createProject(this.projectDetails.value);
    this.router.navigateByUrl('project-gallery');
  }
}
