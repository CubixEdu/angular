import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Fruit } from './fruit.model';

@Directive({
  selector: '[appFruit]',
  standalone: true
})
export class FruitDirective {
  private _fruit?: Fruit;

  @Input('appFruit') set fruit(fruit: Fruit) {
    this._fruit = fruit;
    this.formatFruit();
  };

  get fruit(): Fruit | undefined {
    return this._fruit;
  }

  constructor(
    private readonly element: ElementRef<HTMLElement>
  ) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'blue';
    this.element.nativeElement.style.color = 'white';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.formatFruit();
  }

  formatFruit() {
    this.element.nativeElement.style.backgroundColor = this.fruit?.color ?? 'transparent';
    this.element.nativeElement.style.padding = '4px 8px';
    this.element.nativeElement.style.borderRadius = '4px';
    this.element.nativeElement.style.textAlign = 'center';
    this.element.nativeElement.style.color = 'black';
  }

}
