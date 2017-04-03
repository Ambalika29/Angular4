import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective  implements OnInit{

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'yellow';
  @HostBinding('style.backgroundColor') backgroundColor:string = 'transparent';

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter')onmouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
    // this.backgroundColor = 'yellow';
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')onmouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }

}
