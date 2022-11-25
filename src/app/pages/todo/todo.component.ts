import { Component, OnInit } from '@angular/core';
import id from 'date-fns/locale/id';
import { TODO, Todo } from './model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit{
  todosParent!: Todo[]
  //todosParent: Todo[] = [] ///// DEFINE TODOSPARENT UNTUK MELAKUKAN ASIGN KEPADA INTERFACE TODO ////////
  private _todo!: Todo // NANTINYA AKAN DIKIRIM KE CHILD / FORM
  isLoading: boolean = true
  today: Date = new Date()
  locale: Locale = id
  constructor(){}

  ngOnInit(): void {
    setTimeout(()=> {
      this.loadTodos()
    },2000)
  }
  //////////////// ADD /////////////////////////
  loadTodos(): void {
    // const sessionTodos: string = sessionStorage.getItem(TODO) as string
    // if (!sessionTodos){
    //   const todos: Todo[] = [
    //     {
    //       id: 1,
    //       name: 'Lumine',
    //       isCompleted: false
    //     },{
    //       id: 2,
    //       name: 'Raiden',
    //       isCompleted: true
    //     }
    //   ]
    //   sessionStorage.setItem(TODO, JSON.stringify(todos))
    //   this.todosParent = todos
    // }else{
    //   this.todosParent = JSON.parse(sessionTodos)
    // }
  }

  /////// GET TODO /////////  //////// setter dan getter harus dengan nama yang sama
  get todoSet(): Todo{return this._todo as Todo}
  set todoSet(todo: Todo){
    this.onSaveTodo(todo)
  }

  ////////////// EDIT (FUCTION IF) save (FUNCTION ELSE) ///////////////////
  onSaveTodo (Newtodo: Todo): void {
    // if (Newtodo.id){
    //   this.todosParent = this.todosParent.map((t)=>{
    //     if (t.id === Newtodo.id) t = Newtodo
    //     return t
    //   })
    // }else{
    //   Newtodo.id = this.todosParent.length + 1
    //   this.todosParent.push(Newtodo)
    // }
    // sessionStorage.setItem(TODO, JSON.stringify(this.todosParent))
  }

  ///////////// toggle true / false /////////////
  onToggleTodo (Toggletodo: Todo): void {
    // Toggletodo.isCompleted = !Toggletodo.isCompleted
    // console.log('todo.component.onToggletodo', Toggletodo)
    
  }
  ///////////////// delete /////////////////
  onDeleteTodo (Deletetodo: Todo): void {
    // for (let index = 0; index < this.todosParent.length; index++) {
    //   if (this.todosParent[index].id === Deletetodo.id) {
    //     this.todosParent.splice(index, 1)
    //   }
    // }
    // sessionStorage.setItem(TODO, JSON.stringify(this.todosParent))
  }
  ////////////////// edit ////////////////////
  onEditTodo (editTodo: Todo): void {
    // this._todo= editTodo
  }

}