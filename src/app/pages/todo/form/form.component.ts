import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() todo!: Todo  ////// MAU MEMASUKKAN DATA DARI PARENT / TODO.TS 
  @Output() todoChange: EventEmitter<Todo> = new EventEmitter<Todo>()
  // @Output() saveTodo: EventEmitter<Todo> = new EventEmitter<Todo>()  //// SAVE ////

  constructor() {

  }

  ngOnInit(): void {
  }

  /////////// EDIT /////////////
  ngOnChanges(): void {
    this.setFormValue(this.todo);
  }

  /////////// ADD //////////
  todoForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('' ,[Validators.required, Validators.minLength(3)]),
    isCompleted: new FormControl(false)
  })

  ////////// TOMBOL SUBMIT /////////////
  onSubmit(): void {
    console.log(this.todoForm.value)
    this.todoChange.emit(this.todoForm.value) 
    this.todoForm.reset()    
  }

  /////////// SET VALUE //////////////
  setFormValue(Formtodo: Todo): void {
    if (Formtodo){
      this.todoForm.controls['id']?.setValue(Formtodo.id)
      this.todoForm.controls['name']?.setValue(Formtodo.name)
      this.todoForm.controls['isCompleted']?.setValue(Formtodo.isCompleted)
    }    
  }
}
