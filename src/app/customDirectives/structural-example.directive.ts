import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appStructuralExample]',
})
export class StructuralExampleDirective implements OnInit, OnChanges {
  @Input() appStructuralExample: any;
  constructor(
    private tempRef: TemplateRef<any>,
    private vdRef: ViewContainerRef
  ) {}
  ngOnInit(): void {}
  ngOnChanges(): void {
    if (this.appStructuralExample) {
      this.vdRef.createEmbeddedView(this.tempRef);
    } else {
      this.vdRef.clear();
    }
  }
}
