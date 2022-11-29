import { Observable } from "rxjs";
import { Todo } from "../model/todo.model";

export interface ITodoService{
    getAll():Observable<Todo[]>
    save(todo:Todo): Observable<void> 
    delete(todo:Todo):Observable<void>
    toggle(todo:Todo):Observable<void>
}