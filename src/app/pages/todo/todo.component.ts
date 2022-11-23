import { Component, OnInit } from '@angular/core';
import { Todo } from './model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit{
  todosParent: Todo[] = []

  constructor(){}

  ngOnInit(): void {
    this.loadTodos()
  }
  loadTodos(): void {
    this.todosParent = [
      {
        id: 1,
        name: 'Makan',
        isCompleted: false
      },{
        id: 2,
        name: 'ngoding',
        isCompleted: false
      }
    ]
  }
}
