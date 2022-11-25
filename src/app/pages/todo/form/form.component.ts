import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() todo!: Todo  ////// MAU MEMASUKKAN DATA DARI PARENT / TODO.TS 
  @Output() todoChange: EventEmitter<Todo> = new EventEmitter<Todo>()
  // @Output() saveTodo: EventEmitter<Todo> = new EventEmitter<Todo>()  //// SAVE ////

  constructor(private readonly todoService: TodoService, private readonly route : ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) =>{
        // console.log(params['id']);
        
        const { id } = params
        ///// +id ini menjadikan yang string -> number
        ///// berlaku untuk bilangan bulat
        this.todo = this.todoService.get(+id)
        this.setFormValue(this.todo)
      }
    })
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
    this.todoService.save(this.todoForm.value)
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

  // getter
  // tambahkan ! untuk memberikan kesan getter name
  /////// di bawah tidak akan null ////////////
  get name(){return this.todoForm.get('name')!}

  isFormValid(todoField: string): string {
    const control: AbstractControl =  this.todoForm.get(todoField) as AbstractControl;
    let className = ''
    if (control && control.invalid && (control.dirty || control.touched)){
      className = 'is-invalid'
    }else if (control && control.valid && (control.dirty || control.touched)){
      className = 'is-valid'
    } return className

  }
}
