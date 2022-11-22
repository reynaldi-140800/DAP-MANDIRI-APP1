import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  //two way binding
  @Input() counter: number = 0
  @Output() counterChange =  new EventEmitter<number>()

  @Input() title: string = 'Rafi'
  //@Output() counter = new EventEmitter<number>()      // one way binding
  @Output() textParent =  new EventEmitter<string>()
  
  textChild: string = ''

  count: number = 0
  constructor() { }

  ngOnInit(): void {
  }
  onIncrease(){
    this.count++
    this.counterChange.emit(this.count)
  }

  onDecrease(){
    this.count--
    this.counterChange.emit(this.count)
  }

  onTextInput($event: any): void{ // ubah ke string jika ingin memakai return
    console.log('$event:', $event)
    console.log('$event.target.value:', $event.target.value)
    const {value} = $event.target
    value.toLowerCase() === 'mandiri'? this.textChild = 'Aku Mandirian' : this.textChild = 'Aku tetap mandirian'
    this.textParent.emit(this.textChild)
  }
}
