import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective implements OnInit {
  @Input() type: string;

  constructor(private elm: ElementRef) {
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    if (this.type === 'title') {
      this.elm.nativeElement.style.textDecoration = 'none';
    } else if (this.type === 'tags') {
      this.elm.nativeElement.style.fontWeight = 'normal';
    }
  }
  @HostListener('mouseenter') onMouseEnter(): void {
    if (this.type === 'title') {
      this.elm.nativeElement.style.textDecoration = 'underline';
    } else if (this.type === 'tags') {
      this.elm.nativeElement.style.fontWeight = 'bold';
    }
  }

  ngOnInit(): void {
  }


}
