import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
})
export class CustomDirectiveDirective {
  constructor(el: ElementRef) {
    // console.log('ctor called');
    el.nativeElement.style.background = '#fcc';
    el.nativeElement.style.padding = '10px';
    el.nativeElement.style.color = '#a33';
  }
}
