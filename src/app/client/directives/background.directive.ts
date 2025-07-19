import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackground]',
  standalone: true
})
export class BackgroundDirective {

  constructor(private element:ElementRef) {
  }
@HostListener('mouseover')  over(){
    this.element.nativeElement.style.backgroundColor='blue';

  }
  @HostListener('mouseout') out(){
    this.element.nativeElement.style.backgroundColor='yellow';
    this.element.nativeElement.style.color='black';
  }
}
