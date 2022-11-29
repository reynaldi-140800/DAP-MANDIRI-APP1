import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TODO, Todo } from '../model/todo.model';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  isLoading: boolean = true;
  constructor(private readonly todoService: TodoService) {}

  ngOnInit(): void {
    this.onLoadTodo()
  }

  onCheckTodo(todo: Todo): void {
    todo.isCompleted=!todo.isCompleted
    this.todoService.toggle(todo).subscribe()
  }

  onLoadTodo() {
    this.isLoading = false;
    this.todoService.getAll().subscribe({
      next:(todos:Todo[])=>{
        this.todos=todos
      }
    })
  }

  onDeleteTodo(todo: Todo): void {
    this.todoService.delete(todo).subscribe()
  }

  // onEditTodo(todo: Todo): void {
  //   this.todoService()
  // }

}
