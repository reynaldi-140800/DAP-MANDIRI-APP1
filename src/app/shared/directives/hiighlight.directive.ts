import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHiighlight]'
})
export class HiighlightDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'white'
   }

}
