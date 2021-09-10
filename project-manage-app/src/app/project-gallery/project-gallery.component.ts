import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataManageService } from '../services/data-manage.service';

@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.scss']
})
export class ProjectGalleryComponent implements OnInit {

  public files = [];
  constructor(
    private dataService : DataManageService,
    private router : Router
  ) { }
  public uploadFiles: FormData = new FormData();
  organization = '';
  ngOnInit(): void {
  }
  fileUploadChange(event: any) {
    this.files = event.target.files;
  }

  uploadFile() {
    for(let i = 0 ; i<this.files.length ; i++){
      this.uploadFiles.append(`file`,this.files[i]);
    }
  }

  updateProject(){
    let reqBody={
      organization: this.organization,
      files: this.uploadFiles
    }
  this.dataService.updateProject(reqBody);
  this.router.navigateByUrl('project-cost')
  }
  
  
}
