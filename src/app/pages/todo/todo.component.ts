import { Component, OnInit } from '@angular/core';
import { TODO, Todo } from './model/todo';

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

    const sessionTodos: string = sessionStorage.getItem(TODO) as string
    if (!sessionTodos){
      const todos: Todo[] = [
        {
          id: 1,
          name: 'Lumine',
          isCompleted: false
        },{
          id: 2,
          name: 'Raiden',
          isCompleted: true
        }
      ]
      sessionStorage.setItem(TODO, JSON.stringify(todos))
      this.todosParent = todos
    }else{
      this.todosParent = JSON.parse(sessionTodos)
    }
  }

  onSaveTodo (Newtodo: Todo): void {
    console.log('todo.component', Newtodo)
    Newtodo.id = this.todosParent.length + 1
    this.todosParent.push(Newtodo)
    sessionStorage.setItem(TODO, JSON.stringify(this.todosParent))
  }

  onToggleTodo (Toggletodo: Todo): void {
    Toggletodo.isCompleted = !Toggletodo.isCompleted
    console.log('todo.component.onToggletodo', Toggletodo)
    
  }

}
