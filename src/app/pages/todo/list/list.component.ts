import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  @Input() todosChild: Todo[] = []
  @Output() toggleTodo: EventEmitter<Todo> = new EventEmitter <Todo>()
  constructor(){}

  ngOnInit(): void {
    
  }
  onCheckTodo(todoCheck: Todo): void {
    this.toggleTodo.emit(todoCheck)
  }

}
