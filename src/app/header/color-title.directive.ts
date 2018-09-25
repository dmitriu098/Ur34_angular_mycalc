import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorTitle]'
})
export class ColorTitleDirective {

  constructor(private elementRef: ElementRef) {

    this.elementRef.nativeElement.style.color = 'red';
  }
}
