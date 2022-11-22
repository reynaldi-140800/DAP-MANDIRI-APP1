import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  title:string = 'title from parent.component gaes'
  counter: number = 0
  textParent: string = ''


  constructor(){}

  ngOnInit(): void {
  }
  onChangeCounter (count: number): void {
    this.counter = count
  }
  onChangeMessage (text: string): void {
    this.textParent = text
  }
}
