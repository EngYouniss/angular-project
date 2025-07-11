import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]',
  standalone: true
})
export class HoverEffectDirective {

  constructor(private el: ElementRef) {
  console.log('HoverEffectDirective applied');
  el.nativeElement.style.backgroundColor = 'blue';
  el.nativeElement.style.minHeight = '200px'; // فقط للتجربة
}

}
