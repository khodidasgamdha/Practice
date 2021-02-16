import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[panNumber]'
})
export class PanNumberDirective {

  @Input('panNumber') formate;

  constructor(private el: ElementRef ) { }

  @HostListener('blur') onBlur(){
    let value: String = this.el.nativeElement.value;

    this.el.nativeElement.value = value.toUpperCase();
  }

}