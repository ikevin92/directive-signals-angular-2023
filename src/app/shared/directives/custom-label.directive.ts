import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {
  private htmlElement: ElementRef<HTMLElement>;

  constructor(private el: ElementRef<HTMLElement>) {
    console.log('constructor de la directiva', { el });
    this.htmlElement = el;

    this.htmlElement.nativeElement.innerHTML = 'Hola mundo';
  }

  ngOnInit(): void {
    console.log('directiva - ngOnInit');
  }
}