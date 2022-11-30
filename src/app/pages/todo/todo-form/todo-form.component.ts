import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { ApiResponse } from "src/app/shared/model/api-respon.model";
import { Todo, TodoField, TODO } from "../model/todo.model";
import { TodoService } from "../service/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  todo!: Todo;
  constructor(
    private readonly todoService: TodoService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params: Params) => {
        const { id } = params;
        this.todoService.get(id).subscribe({
          next: (response: ApiResponse<Todo>) => {
            this.setFormValue(response.data);
          }
        })
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
    this.todoService.save(this.todoForm.value).subscribe(() => {
      this.router.navigateByUrl(TODO);
    });
  }

  setFormValue(todo: Todo): void {
    if (todo) {
      console.log('todo:', todo);
      this.todoForm.controls[TodoField.ID]?.setValue(todo.id);
      this.todoForm.controls[TodoField.NAME]?.setValue(todo.name);
      this.todoForm.controls[TodoField.IS_COMPLETED]?.setValue(
        todo.isCompleted
      );
    }
  }

  isFormValid(todoField: string): boolean {
    const control: AbstractControl = this.todoForm.get(
      todoField
    ) as AbstractControl;
    return control && control.invalid && (control.dirty || control.touched);
  }
}