import { Injectable } from '@angular/core';
import { observable, Observable, Observer } from 'rxjs';
import { TODO, Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[]=[]
  private storage: Storage = sessionStorage
  constructor() { }

  getAll(): Observable<Todo[]> {
    return new Observable<Todo[]>((observer: Observer<Todo[]>)=>{
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
        observer.next(this.todos)
        
      }catch(err: any){
        observer.error(err.message)
    }
    }) 
  }

  save(todo: Todo): Observable<void> {
    return new Observable<void>((observer: Observer<void>)=>{
      try {
        if (todo.id) {
          this.todos = this.todos.map((t) => {
            if (t.id === todo.id) t = todo;
            return t;
          });
        } else {
          todo.id = this.todos.length + 1;
          this.todos.push(todo)
          observer.next()
        }
        this.setToStorage();
      } catch (err: any) {
        observer.error(err.message);
      }
    })
  }

  private setToStorage(): void {
    this.storage.setItem(TODO, JSON.stringify(this.todos))
  }

  onDeleteTodo (Deletetodo: Todo): Observable<void> {
    return new Observable<void>((observer: Observer<void>)=> {
      for (let index = 0; index < this.todos.length; index++) {
        if (this.todos[index].id === Deletetodo.id) {
          this.todos.splice(index, 1)
        }
      }
      sessionStorage.setItem(TODO, JSON.stringify(this.todos))
      observer.next()
    })
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