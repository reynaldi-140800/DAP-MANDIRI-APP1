import { Component, OnInit } from '@angular/core';
import { Todo, TODO } from './model/todo.model';
import id from 'date-fns/locale/id';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

  today:Date = new Date();
  locale:Locale=id

  constructor() {}

  ngOnInit(): void {
  }
}
