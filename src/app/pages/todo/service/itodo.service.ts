import { Observable } from 'rxjs';
import { Todo } from '../model/todo';

export interface ItodoService {
    getAll(): Observable<Todo[]>
    save(todo: Todo): Observable<void>
}
