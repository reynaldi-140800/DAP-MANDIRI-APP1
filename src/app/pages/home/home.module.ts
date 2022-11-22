import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { HomeBannerComponent } from './components/banner/home-banner.component';
import { HomeNewsletterComponent } from './components/newsletter/home-newsletter.component';
import { HomeServiceComponent } from './components/service/home-service.component';
import { HomeAboutComponent } from './components/about/home-about.component';
import { HomeFaqComponent } from './components/faq/home-faq.component';
import { HomeInstructorsComponent } from './components/instructors/home-instructors.component';
import { HomeCoursesComponent } from './components/courses/home-courses.component';
import { HomeContactComponent } from './components/contact/home-contact.component';

const components = [
  HomeBannerComponent,
  HomeNewsletterComponent,
  HomeServiceComponent,
  HomeAboutComponent,
  HomeFaqComponent,
  HomeInstructorsComponent,
  HomeCoursesComponent,
  HomeContactComponent
]

@NgModule({
  declarations: [
    HomeComponent,
    ...components
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
