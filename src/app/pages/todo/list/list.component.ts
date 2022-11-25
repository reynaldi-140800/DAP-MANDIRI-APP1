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
  // @Input() todosChild!: Todo[]
  // @Output() toggleTodo: EventEmitter<Todo> = new EventEmitter <Todo>()  // TOGGLE
  // @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter <Todo>()  // DELETE
  // @Output() editTodo: EventEmitter<Todo> = new EventEmitter <Todo>()    // EDIT
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
    this.todos = this.todoService.getAll()
  }

  /////////////// CHECK //////////////////
  onCheckTodo(todoCheck: Todo): void {
    this.todoService.onToggleTodo(todoCheck)
  }
  /////////////// DELETE ////////////////////
  ondeleteTodo(todoDelete: Todo): void {
    this.todoService.onDeleteTodo(todoDelete)
  }

  ////////////////// EDIT ////////////////////
  
}
