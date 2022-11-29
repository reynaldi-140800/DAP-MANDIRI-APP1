import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ChildAbComponent } from './component-a/child-ab/child-ab.component';
import { ChildAaComponent } from './component-a/child-aa/child-aa.component';
import { RouterModule } from '@angular/router';
import { DemoRoutingModule } from './demo-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ComponentAComponent,
    ComponentBComponent,
    ChildAaComponent,
    ChildAbComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DemoRoutingModule,
    SharedModule,
  ]
})
export class DemoModule { }
