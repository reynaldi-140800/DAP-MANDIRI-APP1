import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output() saveTodo: EventEmitter<Todo> = new EventEmitter<Todo>()

  constructor() {

  }

  ngOnInit(): void {
  }

  todoForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('' ,[Validators.required, Validators.minLength(3)]),
    isCompleted: new FormControl(false)
  })

  onSubmit(): void {
    console.log(this.todoForm.value)
    this.saveTodo.emit(this.todoForm.value)
    this.todoForm.reset()    
  }

}
