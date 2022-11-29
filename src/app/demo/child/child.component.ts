import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() title:string='nokia'
  // @Output() counter= new EventEmitter<number>()
  @Output() message= new EventEmitter<string>()

  //two way data binding
  @Input() counter:number=0;
  @Output() counterChange = new EventEmitter<number>()

  //mandirian baru
  @Input() messageMandirianInput:string=''
  @Output() messageMandirianInputChange= new EventEmitter<string>()

  messageMandirian:string=''
  onMessageInputMandirian($event:any):void{
    const {value} = $event.target
    this.messageMandirianInputChange.emit(value)
  }

  count:number=0
  constructor() { }

  ngOnInit(): void {
  }

  onIncrease(){
    this.count++;
    this.counterChange.emit(this.count);
  }

  onDecrease(){
    if(this.count)
    this.count--;
    this.counterChange.emit(this.count);
  }

  messageInput:string='';
  onMessageInput($event:any): void {
    const {value} = $event.target
    if (value == 'mandiri'){
      this.messageInput='aku mandirian'
    }else{
      this.messageInput='aku tetap mandirian'
    }
    this.message.emit(this.messageInput)

  }
}