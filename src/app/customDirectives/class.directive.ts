import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  @Input('appClass')
  public set displayStyle(value: Object) {
    let enteries = Object.entries(value);
    console.log('enteries', enteries);
    for (let entry of enteries) {
      if (entry[1]) {
        this.renderer.addClass(this.element.nativeElement, entry[0]);
      }
    }
  }
  // @Input()
  // public set displayStyle(value: Object) {
  //   let enteries = Object.entries(value);
  //   console.log('enteries', enteries);
  //   for (let entry of enteries) {
  //     if (entry[1]) {
  //       this.renderer.addClass(this.element.nativeElement, entry[0]);
  //     }
  //   }
  // }
}
