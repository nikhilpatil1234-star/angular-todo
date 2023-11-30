import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom2]',
})
export class Custom2Directive {
  constructor(private element: ElementRef) {
    element.nativeElement.style.color = 'red';
  }
}
