import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoComponent } from "./todo.component";

const routes: Routes = [
  {
    path: '',
    component: TodoComponent
  },
  {
    path: ':id',
    component: TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }