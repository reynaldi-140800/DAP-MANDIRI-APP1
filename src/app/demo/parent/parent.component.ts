import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  title:string='title dari parent';
  count:number=0;
  messageInputParent:string='';
  messageMandirianParent:string='';
  constructor() { }

  ngOnInit(): void {
  }

  onChangeCounter(counter:number):void{
    this.count=counter;
  }
  onMessage(message:string):void{
    this.messageInputParent=message;
  }

}
