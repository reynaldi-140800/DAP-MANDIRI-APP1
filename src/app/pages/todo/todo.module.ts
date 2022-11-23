import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { TodoRoutingModule } from './todo-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoComponent, ListComponent, FormComponent],
  imports: [CommonModule, TodoRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [TodoComponent]
})
export class TodoModule { }
