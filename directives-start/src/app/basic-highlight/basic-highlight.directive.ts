import { Directive, OnInit, ElementRef} from '@angular/core'

@Directive({
    selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective{

    constructor(private elRef: ElementRef){

    }

    ngOnInit(){
        this.elRef.nativeElement.style.backgroundColor = 'green';
    }

}