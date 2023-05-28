import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {
  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input()
  set color(value: string) {
    // console.log({ color: value });
    this._color = value;
    this.setStyle();
  }

  @Input()
  set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    console.log({ value });
    this.setErrorMessage();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    // console.log('constructor de la directiva', { el });
    this.htmlElement = el;
    // this.htmlElement.nativeElement.innerHTML = 'Hola mundo';
  }

  ngOnInit(): void {
    console.log('directiva - ngOnInit');
  }

  setStyle(): void {
    if (!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage(): void {
    if (!this.htmlElement) return;
    if (!this._errors) {
      this.htmlElement.nativeElement.innerText = 'no hay errores';
      return;
    }

    const errors = Object.keys(this._errors);

    if (errors.includes('required')) {
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido';
      return;
    }
  }
}
