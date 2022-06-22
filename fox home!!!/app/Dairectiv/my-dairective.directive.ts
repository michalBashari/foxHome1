import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyDairective]'
})
export class MyDairectiveDirective implements OnInit {
  @Input() color:string | undefined
  @Input() text:string |undefined
  constructor(private element:ElementRef) { }
  ngOnInit(): void {
   
  }
 @HostListener('click') f(){
    if(this.color)
     this.element.nativeElement.style.backgroundColor=this.color
    else
    this.element.nativeElement.style.backgroundColor="black"
    if(this.text)
    this.element.nativeElement.textContent=this.text
    this.element.nativeElement.textContent="הפריט נוסף לסל"
    }
    // @HostListener('mouseenter') h(){
    //   // alert("עברו עלי")
    //   this.element.nativeElement.style.hight='50%'
    // }

}
