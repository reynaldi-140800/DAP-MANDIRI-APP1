import { Injectable } from '@angular/core';
import { TODO, Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[]=[]
  private storage: Storage = sessionStorage
  constructor() { }

  getAll(): Todo[] {
    const sessionTodos: string = this.storage.getItem(TODO) as string
    try{
      // TERNARY
      // kondisi ? 'bener' : 'tidak benar'
      const todos: Todo[] = sessionTodos ? JSON.parse(sessionTodos) : [{
        id:1,
        name: 'Makan',
        isCompleted: false
      },]
      this.todos = todos
      this.storage.setItem(TODO, JSON.stringify(this.todos))

      this.setToStorage()
      return todos
    }catch(err: any){
      return err.message
    }
  }

  save(todo: Todo): void {
    try {
      if (todo.id) {
        this.todos = this.todos.map((t) => {
          if (t.id === todo.id) t = todo;
          return t;
        });
      } else {
        todo.id = this.todos.length + 1;
        this.todos.push(todo)
      }
      this.setToStorage();
    } catch (err: any) {
      console.error(err.message);
    }
  }

  private setToStorage(): void {
    this.storage.setItem(TODO, JSON.stringify(this.todos))
  }

  onDeleteTodo (Deletetodo: Todo): void {
    for (let index = 0; index < this.todos.length; index++) {
      if (this.todos[index].id === Deletetodo.id) {
        this.todos.splice(index, 1)
      }
    }
    sessionStorage.setItem(TODO, JSON.stringify(this.todos))
  }

  onToggleTodo (Toggletodo: Todo): void {
    Toggletodo.isCompleted = !Toggletodo.isCompleted
    console.log('todo.component.onToggletodo', Toggletodo)
  }
  
  get(id: number):Todo{
    try{
      return this.todos.find((t)=> t.id === id) as Todo
    }catch(err: any){
      return err.message
    }
  }

  
}