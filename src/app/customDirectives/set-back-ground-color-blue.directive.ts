import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSetBackGroundColorBlue]',
})
export class SetBackGroundColorBlueDirective implements OnInit {
  private elements: ElementRef;
  constructor(private element: ElementRef) {
    this.elements = element;
  }
  ngOnInit(): void {
    this.elements.nativeElement.style.backgroundColor = 'powderblue';
  }
}
