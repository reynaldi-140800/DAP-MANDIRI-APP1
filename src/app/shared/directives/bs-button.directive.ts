import { Directive, Input, HostBinding } from '@angular/core';

enum ButtonSize {
  sm = 'btn-sm',
  md = 'btn-md',
  lg = 'btn-lg'
}

enum ButtonColor {
  primary = 'btn-primary',
  success = 'btn-success',
  warning = 'btn-warning'
}

@Directive({
  selector: '[appBsButton]'
})
export class BsButtonDirective {
  @Input() size: 'lg' | 'md' | 'sm'= 'md'
  @Input() color: 'primary' | 'success' | 'warning' = 'warning'

  constructor() { }

  @HostBinding ('class')
  get btnStyle(): string {
    const btnColor: ButtonColor = ButtonColor[this.color]
    const btnSize: ButtonSize = ButtonSize[this.size]
    return `btn ${btnColor} ${btnSize}`
  }  
  
}


