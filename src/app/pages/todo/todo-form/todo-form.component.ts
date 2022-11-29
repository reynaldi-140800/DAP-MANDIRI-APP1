import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TODO, Todo, TodoField } from '../model/todo.model';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit, OnChanges {
  todo!: Todo;

  constructor(
    private readonly todoService: TodoService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}
  ngOnChanges(): void {
    this.setFormValue(this.todo);
  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.todoService.get(params['id']).subscribe({
          next:(todo)=>{
            this.todo=todo
          }
        })
        // +id berfungsi untuk menjadikan number dari string
        // berlaku untuk bilangan bulat
        this.setFormValue(this.todo)
      },
    });
  }

  todoForm: FormGroup = new FormGroup({
    [TodoField.ID]: new FormControl(null),
    [TodoField.NAME]: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    [TodoField.IS_COMPLETED]: new FormControl(false),
  });

  onSubmit(): void {
    this.todoService.save(this.todoForm.value).subscribe();
    this.todoForm.reset();
    this.router.navigateByUrl('todo');
  }

  setFormValue(todo: Todo): void {
    if (todo) {
      this.todoForm.controls[TodoField.ID]?.setValue(todo.id);
      this.todoForm.controls[TodoField.NAME]?.setValue(todo.name);
      this.todoForm.controls[TodoField.IS_COMPLETED]?.setValue(
        todo.isCompleted
      );
    }
  }

  get name() {
    return this.todoForm.get('name')!;
  }
  isFormValid(todoField: string): string {
    const control: AbstractControl = this.todoForm.get(
      todoField
    ) as AbstractControl;
    let className = '';
    if (control && control.invalid && (control.dirty || control.touched)) {
      className = 'is-invalid';
    } else if (control && control.valid && (control.dirty || control.touched)) {
      className = 'is-valid';
    }
    return className;
  }
}
