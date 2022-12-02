import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, SkipSelf } from '@angular/core';
import { Observable} from 'rxjs';
import { ApiResponse } from 'src/app/shared/model/api-respon.model';
import { Todo, TODO } from '../model/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  storage: Storage = sessionStorage;
  private todos: Todo[] = [];

  constructor(
    @SkipSelf() private readonly http: HttpClient
  ) {}

  private baseUrl: string = 'api/v1/todos'

  getAll(): Observable<ApiResponse<Todo[]>> {
      try {
        return this.http.get<ApiResponse<Todo[]>>(this.baseUrl, {
          // headers: this.setHeaders()
        })
      } catch (err: any) {
        return err.message
      }
  }

  save(todo: Todo): Observable<ApiResponse<Todo>> {
      try {
        // const headers = this.setHeaders()
        if (todo.id) {
          return this.http.put<ApiResponse<Todo>>(this.baseUrl, todo, {
            // headers: headers
          })
        } 

        return this.http.post<ApiResponse<Todo>>(this.baseUrl, todo, {
          // headers: headers 
        })
        
      } catch (err: any) {
        return err.message
      }
  }

  get(id: string): Observable<ApiResponse<Todo>>{
    try {
      // const headers = this.setHeaders()
      return this.http.get<ApiResponse<Todo>>(`${this.baseUrl}/${id}`)
    } catch (error: any) {
      return error.message
    }
  }

  remove(todo: Todo): Observable<ApiResponse<string>>{
    try {
      // const headers = this.setHeaders()
      return this.http.delete<ApiResponse<string>>(`${this.baseUrl}/${todo.id}`)
    } catch (error: any) {
      return error.message
    }
  }

  toggle(todo: Todo): Observable<void>{
    try {
      // const headers = this.setHeaders()
      todo.isCompleted = !todo.isCompleted
      const { id, name, isCompleted } = todo
      return this.http.put<void>(this.baseUrl, { id, name, isCompleted })
    } catch (error: any) {
      return error.message
    }
  }

  // private setHeaders(): HttpHeaders{
  //   const token = sessionStorage.getItem('token') as string
  //   return new HttpHeaders({
  //     'Authorization': `Bearer ${token}`,
  //   })
  // }

  
}