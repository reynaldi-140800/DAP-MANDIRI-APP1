import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  todos: Todo[]=[]
  isLoading: boolean = true
  constructor(private readonly todoService: TodoService){}

  ngOnInit(): void {    
    // setTimeout(()=>{
      this.onLoadTodo()
    // },2000)
  }
  onLoadTodo(): void {
    this.isLoading = false
    this.todoService.getAll().subscribe({
      next: (todos: Todo[])=>{
        this.todos = todos
      }
    })  
  }

  /////////////// CHECK //////////////////
  onCheckTodo(todoCheck: Todo): void {
    this.todoService.onToggleTodo(todoCheck)
  }
  /////////////// DELETE ////////////////////
  ondeleteTodo(todoDelete: Todo): void {
    this.todoService.onDeleteTodo(todoDelete).subscribe()
  }
}
