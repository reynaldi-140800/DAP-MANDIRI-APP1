import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Todo, TODO } from '../model/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  storage: Storage = sessionStorage;
  private todos: Todo[] = [];

  constructor() {}

  getAll(): Observable<Todo[]> {
    return new Observable<Todo[]>((observer: Observer<Todo[]>) => {
      const sessionTodos: string = this.storage.getItem(TODO) as string;
      try {
        if (!sessionTodos) {
          const todos: Todo[] = [];
          this.todos = todos;
          observer.next(this.todos);
        } else {
          this.todos = JSON.parse(sessionTodos);
          observer.next(this.todos);
        }
        this.setToStorage;
      } catch (err: any) {
        observer.error(err.message);
      }
    });
  }

  save(todo: Todo): Observable<void> {
    return new Observable<void>((observer: Observer<void>) => {
      try {
        if (todo.id) {
          this.todos = this.todos.map((t) => {
            if (t.id === todo.id) t = todo;
            return t;
          });
        } else {
          todo.id = this.todos.length + 1;
          this.todos.push(todo);
          observer.next();
        }
        this.setToStorage();
      } catch (err: any) {
        observer.error(err.message);
      }
    });
  }

  delete(todo: Todo): Observable<void> {
    return new Observable<void>((observer: Observer<void>) => {
      try {
        for (let index = 0; index < this.todos.length; index++) {
          if (this.todos[index].id === todo.id) {
            this.todos.splice(index, 1);
          }
        }
        
        this.setToStorage();
        observer.next();
      } catch (err: any) {
        observer.error(err.message);
      }
    });
  }

  toggle(todo: Todo): Observable<void> {
    return new Observable<void>((observer: Observer<void>) => {
      try {
        this.setToStorage();
        observer.next();
      } catch (err: any) {
        observer.error(err.message);
      }
    });
  }

  private setToStorage(): void {
    this.storage.setItem(TODO, JSON.stringify(this.todos));
  }


  get(id: number): Observable<Todo> {
    return new Observable<Todo>((observer :Observer<Todo>)=>{
      try{
        observer.next(this.todos.find((t)=> t.id === Number(id)) as Todo)
      }
      catch(err: any){
        observer.next(err.message)
      }
    })

  }
}
