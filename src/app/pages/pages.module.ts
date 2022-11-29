import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesComponent } from './pages.component';
import { CoursesModule } from './courses/courses.module';
import { CoursesComponent } from './courses/courses.component';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { CoursesRoutingModule } from './courses/courses-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    SharedModule
  
  ],
  exports:[PagesComponent]
})
export class PagesModule { }
