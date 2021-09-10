import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectCostComponent } from './project-cost/project-cost.component';
import { ProjectDatesComponent } from './project-dates/project-dates.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectGalleryComponent } from './project-gallery/project-gallery.component';
import { ProjectIncludesComponent } from './project-includes/project-includes.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/project-details',
    pathMatch: 'full'
  },
  {
    component: ProjectDetailsComponent,
    path: 'project-details'
  },
  {
    component: ProjectGalleryComponent,
    path:'project-gallery'
  },
  {
    component: ProjectCostComponent,
    path: 'project-cost'
  },
  {
    component: ProjectIncludesComponent,
    path: 'project-includes'
  },
  {
    component: ProjectDatesComponent,
    path: 'project-dates'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
