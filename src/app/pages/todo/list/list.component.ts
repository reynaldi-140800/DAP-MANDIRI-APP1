import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  @Input() todosChild: Todo[] = []
  @Output() toggleTodo: EventEmitter<Todo> = new EventEmitter <Todo>()  // TOGGLE
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter <Todo>()  // DELETE
  @Output() editTodo: EventEmitter<Todo> = new EventEmitter <Todo>()    // EDIT
  constructor(){}

  ngOnInit(): void {    
    
  }

  /////////////// CHECK //////////////////
  onCheckTodo(todoCheck: Todo): void {
    this.toggleTodo.emit(todoCheck)
  }
  /////////////// DELETE ////////////////////
  ondeleteTodo(todoDelete: Todo): void {
    this.deleteTodo.emit(todoDelete)
  }

  ////////////////// EDIT ////////////////////
  oneditTodo(todoEdit: Todo): void {
    this.editTodo.emit(todoEdit)
  }

}
