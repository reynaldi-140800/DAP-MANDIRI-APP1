import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { TodoRoutingModule } from './todo-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodoService } from './service/todo.service';

@NgModule({
  declarations: [TodoComponent, ListComponent, FormComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [],
  providers: [TodoService],
})
export class TodoModule {}
