import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectGalleryComponent } from './project-gallery/project-gallery.component';
import { ProjectCostComponent } from './project-cost/project-cost.component';
import { ProjectIncludesComponent } from './project-includes/project-includes.component';
import { ProjectDatesComponent } from './project-dates/project-dates.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectCostRepeatableComponent } from './shared-components/project-cost-repeatable/project-cost-repeatable.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailsComponent,
    ProjectGalleryComponent,
    ProjectCostComponent,
    ProjectIncludesComponent,
    ProjectDatesComponent,
    ProjectCostRepeatableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
