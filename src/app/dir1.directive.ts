import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appDir1]'
})
export class Dir1Directive {

  constructor(el:ElementRef) { 
    el.nativeElement.style.color="purple";
    el.nativeElement.style.backgroundColor='pink';
    el.nativeElement.style.display='inline-block';
    el.nativeElement.style.padding='15px';
    el.nativeElement.style.textTransform='uppercae'
  }

}
