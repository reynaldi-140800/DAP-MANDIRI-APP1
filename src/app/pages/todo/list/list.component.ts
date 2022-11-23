import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  @Input() todosChild: Todo[] = []

  constructor(){}

  ngOnInit(): void {
    
  }

}
